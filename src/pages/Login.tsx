import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Stethoscope, Building2 } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") || "soignant";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    
    // Demo: redirect to appropriate dashboard
    toast.success(isLogin ? "Connexion réussie !" : "Compte créé avec succès !");
    
    setTimeout(() => {
      if (userType === "soignant") {
        navigate("/dashboard/soignant");
      } else {
        navigate("/dashboard/recruteur");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="p-8 shadow-medical">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                {isLogin ? "Connexion" : "Créer un compte"}
              </h1>
              <p className="text-muted-foreground">
                Accédez à votre espace professionnel
              </p>
            </div>

            <Tabs defaultValue={defaultType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="soignant" className="gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Soignant
                </TabsTrigger>
                <TabsTrigger value="recruteur" className="gap-2">
                  <Building2 className="w-4 h-4" />
                  Recruteur
                </TabsTrigger>
              </TabsList>

              <TabsContent value="soignant">
                <form onSubmit={(e) => handleSubmit(e, "soignant")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-soignant">Email</Label>
                    <Input
                      id="email-soignant"
                      type="email"
                      placeholder="votre.email@exemple.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-soignant">Mot de passe</Label>
                    <Input
                      id="password-soignant"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="metier">Métier</Label>
                      <Input
                        id="metier"
                        placeholder="Ex: Infirmier(ère)"
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-medical"
                  >
                    {isLogin ? "Se connecter" : "Créer mon compte"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="recruteur">
                <form onSubmit={(e) => handleSubmit(e, "recruteur")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-recruteur">Email</Label>
                    <Input
                      id="email-recruteur"
                      type="email"
                      placeholder="recruteur@etablissement.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-recruteur">Mot de passe</Label>
                    <Input
                      id="password-recruteur"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="etablissement">Établissement</Label>
                      <Input
                        id="etablissement"
                        placeholder="Nom de votre établissement"
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-medical"
                  >
                    {isLogin ? "Se connecter" : "Créer mon compte"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin 
                  ? "Pas encore de compte ? Inscrivez-vous" 
                  : "Déjà un compte ? Connectez-vous"
                }
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Stethoscope, 
  Clock, 
  Shield, 
  Users, 
  Calendar,
  FileCheck,
  Bell,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "Mise en ligne rapide",
      description: "Publiez vos missions en moins d'1 minute"
    },
    {
      icon: Users,
      title: "Profils qualifiés",
      description: "Accédez à des soignants validés et disponibles"
    },
    {
      icon: Shield,
      title: "Données sécurisées",
      description: "Conformité RGPD et confidentialité garantie"
    },
    {
      icon: Calendar,
      title: "Planning intelligent",
      description: "Gestion intuitive des disponibilités"
    },
    {
      icon: FileCheck,
      title: "Documents validés",
      description: "Vérification automatique des diplômes"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Alertes personnalisées en temps réel"
    }
  ];

  const jobs = [
    "Aide-soignant", "IDE", "IDEL", "IBODE", "IADE",
    "Kinésithérapeute", "Sage-femme", "Auxiliaire de puériculture",
    "Ambulancier", "Manipulateur radio", "Technicien de laboratoire"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="transparent" />
      <InstallPrompt />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 140, 168, 0.95), rgba(150, 235, 143, 0.85)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Simplifiez vos <span className="text-accent">remplacements</span> médicaux
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            TropiKare connecte recruteurs et soignants pour garantir la continuité des soins dans le secteur paramédical
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/login?type=soignant")}
              className="bg-card text-primary hover:bg-card/90 shadow-medical text-lg px-8 py-6 font-semibold"
            >
              <Stethoscope className="mr-2 w-5 h-5" />
              Je suis soignant
            </Button>
            <Button 
              size="lg"
              onClick={() => navigate("/login?type=recruteur")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-medical text-lg px-8 py-6 font-semibold"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              Je suis recruteur
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Pourquoi choisir TropiKare ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme conçue pour faciliter la mise en relation et garantir la qualité des soins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medical transition-all duration-300 hover:scale-105 bg-card border-border"
              >
                <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Métiers concernés
            </h2>
            <p className="text-xl text-muted-foreground">
              Tous les professionnels du secteur paramédical
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className="bg-gradient-primary px-6 py-3 rounded-full text-primary-foreground font-medium shadow-card hover:shadow-medical transition-all hover:scale-105"
              >
                {job}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Prêt à rejoindre TropiKare ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Créez votre compte en quelques minutes et accédez à des centaines d'opportunités
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-card text-primary hover:bg-card/90 shadow-medical text-lg px-8 py-6 font-semibold"
          >
            Commencer maintenant
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
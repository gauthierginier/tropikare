import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Listen for install prompt
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      toast.info("L'installation est déjà disponible ou votre navigateur ne supporte pas cette fonctionnalité");
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      toast.success('Application installée avec succès !');
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
  };

  const installSteps = [
    {
      title: "Sur Android (Chrome)",
      steps: [
        "Ouvrez le menu (⋮) en haut à droite",
        "Sélectionnez 'Ajouter à l'écran d'accueil'",
        "Confirmez l'installation"
      ]
    },
    {
      title: "Sur iPhone/iPad (Safari)",
      steps: [
        "Appuyez sur le bouton de partage (□↑)",
        "Faites défiler et sélectionnez 'Sur l'écran d'accueil'",
        "Appuyez sur 'Ajouter'"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-primary p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-medical">
              <Smartphone className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Installez TropiKare sur votre appareil
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accédez rapidement à toutes vos missions et gérez votre activité comme une application native
            </p>
          </div>

          {/* Install Button */}
          {!isInstalled ? (
            <div className="text-center mb-12">
              <Button 
                size="lg"
                onClick={handleInstall}
                className="bg-gradient-primary hover:opacity-90 shadow-medical text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Installer l'application
              </Button>
            </div>
          ) : (
            <Card className="p-6 bg-secondary text-secondary-foreground mb-12 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Application déjà installée !
              </h3>
              <p>TropiKare est installée sur votre appareil</p>
            </Card>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-medical transition-all">
              <div className="bg-gradient-primary p-3 rounded-xl w-fit mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                Accès rapide
              </h3>
              <p className="text-muted-foreground">
                Lancez l'app depuis votre écran d'accueil en un clic
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-medical transition-all">
              <div className="bg-gradient-secondary p-3 rounded-xl w-fit mx-auto mb-4">
                <Download className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                Mode hors ligne
              </h3>
              <p className="text-muted-foreground">
                Consultez vos missions même sans connexion internet
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-medical transition-all">
              <div className="bg-accent p-3 rounded-xl w-fit mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                Notifications push
              </h3>
              <p className="text-muted-foreground">
                Recevez des alertes instantanées pour les nouvelles missions
              </p>
            </Card>
          </div>

          {/* Manual Installation Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
              Installation manuelle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {installSteps.map((guide, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                    {guide.title}
                  </h3>
                  <ol className="space-y-3">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3 text-muted-foreground">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Install;
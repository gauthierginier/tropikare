import { useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Briefcase, 
  FileText, 
  Bell,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2
} from "lucide-react";

const DashboardSoignant = () => {
  const [missions] = useState([
    {
      id: 1,
      title: "Remplacement IDE - Nuit",
      etablissement: "CHU de Martinique",
      location: "Fort-de-France",
      date: "15-17 Mars 2025",
      horaires: "20h - 8h",
      tarif: "25€/h",
      status: "disponible",
      urgent: true
    },
    {
      id: 2,
      title: "Aide-soignant - Jour",
      etablissement: "Clinique Sainte-Marie",
      location: "Le Lamentin",
      date: "20 Mars 2025",
      horaires: "8h - 16h",
      tarif: "18€/h",
      status: "disponible",
      urgent: false
    },
    {
      id: 3,
      title: "IDEL à domicile",
      etablissement: "Service HAD",
      location: "Schoelcher",
      date: "22-24 Mars 2025",
      horaires: "9h - 18h",
      tarif: "30€/h",
      status: "en_attente",
      urgent: false
    }
  ]);

  const stats = [
    { label: "Missions complétées", value: "12", icon: CheckCircle2, color: "text-secondary" },
    { label: "Missions à venir", value: "3", icon: Calendar, color: "text-primary" },
    { label: "Documents validés", value: "8/10", icon: FileText, color: "text-accent" },
    { label: "Notifications", value: "5", icon: Bell, color: "text-destructive" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "disponible":
        return <Badge className="bg-secondary text-secondary-foreground">Disponible</Badge>;
      case "en_attente":
        return <Badge className="bg-accent text-accent-foreground">En attente</Badge>;
      default:
        return <Badge>Inconnue</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Bienvenue, Marie 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Infirmière Diplômée d'État • Fort-de-France
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-medical transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-heading font-bold text-foreground">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Missions Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Missions disponibles
            </h2>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Calendar className="w-4 h-4 mr-2" />
              Mon planning
            </Button>
          </div>

          <div className="grid gap-4">
            {missions.map((mission) => (
              <Card key={mission.id} className="p-6 hover:shadow-medical transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-heading font-semibold text-foreground">
                            {mission.title}
                          </h3>
                          {mission.urgent && (
                            <Badge className="bg-destructive text-destructive-foreground">
                              Urgent
                            </Badge>
                          )}
                          {getStatusBadge(mission.status)}
                        </div>
                        <p className="text-muted-foreground font-medium">{mission.etablissement}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{mission.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{mission.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{mission.horaires}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{mission.tarif}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:flex-col">
                    <Button 
                      className="flex-1 lg:flex-none bg-gradient-primary hover:opacity-90"
                      disabled={mission.status === "en_attente"}
                    >
                      {mission.status === "disponible" ? "Postuler" : "En attente"}
                    </Button>
                    <Button variant="outline" className="flex-1 lg:flex-none">
                      Détails
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            Actions rapides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto py-4">
              <FileText className="w-5 h-5 mr-3" />
              Gérer mes documents
            </Button>
            <Button variant="outline" className="justify-start h-auto py-4">
              <Calendar className="w-5 h-5 mr-3" />
              Mes disponibilités
            </Button>
            <Button variant="outline" className="justify-start h-auto py-4">
              <Bell className="w-5 h-5 mr-3" />
              Notifications
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSoignant;
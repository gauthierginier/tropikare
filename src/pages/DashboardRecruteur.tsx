import { useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Users, 
  Briefcase, 
  TrendingUp,
  Calendar,
  UserCheck,
  Clock,
  FileText
} from "lucide-react";

const DashboardRecruteur = () => {
  const [missions] = useState([
    {
      id: 1,
      title: "Remplacement IDE - Nuit",
      poste: "Infirmier(ère) DE",
      candidatures: 8,
      validees: 2,
      date: "15-17 Mars 2025",
      status: "active"
    },
    {
      id: 2,
      title: "Aide-soignant - Jour",
      poste: "Aide-soignant",
      candidatures: 12,
      validees: 5,
      date: "20 Mars 2025",
      status: "active"
    },
    {
      id: 3,
      title: "Kinésithérapeute",
      poste: "Kinésithérapeute",
      candidatures: 3,
      validees: 1,
      date: "25 Mars 2025",
      status: "pourvue"
    }
  ]);

  const stats = [
    { label: "Missions actives", value: "5", icon: Briefcase, color: "text-primary" },
    { label: "Candidatures reçues", value: "23", icon: Users, color: "text-secondary" },
    { label: "Missions pourvues", value: "18", icon: UserCheck, color: "text-accent" },
    { label: "Taux de réussite", value: "94%", icon: TrendingUp, color: "text-secondary" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-primary text-primary-foreground">Active</Badge>;
      case "pourvue":
        return <Badge className="bg-secondary text-secondary-foreground">Pourvue</Badge>;
      default:
        return <Badge>Inconnue</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
              Tableau de bord
            </h1>
            <p className="text-muted-foreground text-lg">
              CHU de Martinique
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-medical w-fit">
            <Plus className="w-5 h-5 mr-2" />
            Nouvelle mission
          </Button>
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
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
            Mes missions
          </h2>

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
                          {getStatusBadge(mission.status)}
                        </div>
                        <p className="text-muted-foreground">{mission.poste}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{mission.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Users className="w-4 h-4" />
                        <span>{mission.candidatures} candidatures</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-semibold">
                        <UserCheck className="w-4 h-4" />
                        <span>{mission.validees} validées</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:flex-col">
                    <Button className="flex-1 lg:flex-none bg-gradient-primary hover:opacity-90">
                      Voir les profils
                    </Button>
                    <Button variant="outline" className="flex-1 lg:flex-none">
                      Modifier
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Actions rapides
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Créer une nouvelle mission
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Gérer mon réseau
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Contrats et documents
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              Statistiques du mois
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Missions complétées</span>
                  <span className="font-semibold text-foreground">18/20</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary" style={{ width: "90%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Taux de satisfaction</span>
                  <span className="font-semibold text-foreground">4.8/5</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-secondary" style={{ width: "96%" }} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecruteur;
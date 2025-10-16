import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">TropiKare</span>
            </div>
            <p className="text-sm opacity-90">
              Plateforme de mise en relation entre recruteurs et soignants dans le secteur paramédical.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/missions" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Missions
                </Link>
              </li>
            </ul>
          </div>

          {/* Profils */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Profils</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login?type=soignant" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Espace Soignant
                </Link>
              </li>
              <li>
                <Link to="/login?type=recruteur" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Espace Recruteur
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <span>contact@tropikare.fr</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <span>0690 70 79 73</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span>Martinique</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; 2025 TropiKare. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
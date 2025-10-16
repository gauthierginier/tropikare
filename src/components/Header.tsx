import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Stethoscope } from "lucide-react";

interface HeaderProps {
  variant?: "default" | "transparent";
}

export const Header = ({ variant = "default" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const headerClass = variant === "transparent" 
    ? "bg-transparent absolute top-0 left-0 right-0 z-50" 
    : "bg-card shadow-card";

  return (
    <header className={`${headerClass} transition-all duration-300`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-medical group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              TropiKare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              À propos
            </Link>
            <Link to="/missions" className="text-foreground hover:text-primary transition-colors font-medium">
              Missions
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Button 
              onClick={() => navigate("/login")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medical"
            >
              Connexion
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/missions" 
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Missions
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
            >
              Connexion
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="MAISEN" className="h-20 w-auto self-start" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentische vietnamesische Küche & Premium Sushi in stilvollem Ambiente.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {["Startseite", "Speisekarte", "Reservierung", "Über Uns", "Galerie", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  to={`/${item === "Startseite" ? "" : item.toLowerCase().replace(/\s/g, "-").replace(/ü/g, "ue")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Musterstraße 123, 12345 Stadt</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+49 000 000 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@maisen-restaurant.de</span>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Öffnungszeiten</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p>Mo – Do: 11:30 – 22:00</p>
                  <p>Fr – Sa: 11:30 – 23:00</p>
                  <p>So: 12:00 – 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAISEN – Vietnamese Kitchen, Sushi & Grill. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

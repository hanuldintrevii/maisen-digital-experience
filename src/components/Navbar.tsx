import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Speisekarte", path: "/speisekarte" },
  { label: "Reservierung", path: "/reservierung" },
  { label: "Über Uns", path: "/ueber-uns" },
  { label: "Galerie", path: "/galerie" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-gold border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MAISEN Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4900000000"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Anrufen</span>
            </a>
            <Link
              to="/reservierung"
              className="px-6 py-2.5 bg-gradient-gold text-primary-foreground text-sm font-medium tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Tisch reservieren
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-display tracking-wide py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/reservierung"
                className="mt-4 px-6 py-3 bg-gradient-gold text-primary-foreground text-center text-sm font-medium tracking-wider uppercase rounded-sm"
              >
                Tisch reservieren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

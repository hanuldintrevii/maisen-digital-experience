import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Flame } from "lucide-react";
import sushiBoat from "@/assets/sushi-boat.jpg";
import sushiDetail from "@/assets/sushi-detail.jpg";
import heroImg from "@/assets/hero-restaurant.jpg";
import geishaArt from "@/assets/geisha-art.jpg";

const categories = [
  "Alle",
  "Sushi",
  "Vietnamesisch",
  "Grill",
  "Suppen",
  "Vorspeisen",
  "Vegetarisch",
];

const menuItems = [
  { id: 1, name: "Sushi Boat Deluxe", desc: "40 Stück erlesene Nigiri, Maki & Sashimi auf traditionellem Boot", price: "89,90", cat: "Sushi", image: sushiBoat, badge: "Chef Empfehlung", bestseller: true },
  { id: 2, name: "Rainbow Roll", desc: "Inside-Out Roll mit Lachs, Thunfisch, Avocado & Tobiko", price: "16,90", cat: "Sushi", image: sushiDetail, badge: null, bestseller: true },
  { id: 3, name: "Phở Bò", desc: "Traditionelle vietnamesische Rindfleischsuppe mit Reisnudeln & frischen Kräutern", price: "14,90", cat: "Suppen", image: heroImg, badge: "Bestseller", bestseller: true },
  { id: 4, name: "Bún Bò Huế", desc: "Würzige Suppe aus Zentralvietnam mit Rindfleisch & Zitronengras", price: "15,90", cat: "Suppen", image: heroImg, badge: null, bestseller: false },
  { id: 5, name: "Wagyu Teppanyaki", desc: "Premium Wagyu-Rind auf heißer Platte mit saisonalem Gemüse", price: "34,90", cat: "Grill", image: geishaArt, badge: "Premium", bestseller: false },
  { id: 6, name: "Sommerrollen", desc: "Frische Reispapierrollen mit Garnelen, Kräutern & Erdnusssauce", price: "8,90", cat: "Vorspeisen", image: sushiDetail, badge: null, bestseller: false },
  { id: 7, name: "Bánh Mì Gà", desc: "Vietnamesisches Baguette mit gegrilltem Hähnchen & eingelegtem Gemüse", price: "11,90", cat: "Vietnamesisch", image: heroImg, badge: null, bestseller: true },
  { id: 8, name: "Tofu Teriyaki", desc: "Knuspriger Tofu mit hausgemachter Teriyaki-Glasur & Jasminreis", price: "13,90", cat: "Vegetarisch", image: sushiBoat, badge: null, bestseller: false },
  { id: 9, name: "Edamame", desc: "Gedämpfte Sojabohnen mit Meersalz & Sesamöl", price: "5,90", cat: "Vorspeisen", image: sushiDetail, badge: null, bestseller: false },
];

const Speisekarte = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filtered = activeFilter === "Alle"
    ? menuItems
    : menuItems.filter((item) => item.cat === activeFilter);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-secondary text-center">
        <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
          Kulinarische Vielfalt
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground">
          Unsere <span className="text-gradient-gold">Speisekarte</span>
        </h1>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-gold/10 py-4">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs tracking-wider uppercase rounded-sm border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-gold text-primary-foreground border-transparent"
                    : "border-gold/20 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="group bg-card rounded-sm overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-gold text-primary-foreground text-xs font-medium tracking-wider uppercase rounded-sm">
                        {item.badge}
                      </span>
                    )}
                    {item.bestseller && (
                      <span className="absolute top-3 right-3">
                        <Flame className="w-5 h-5 text-accent" />
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-1.5">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-primary">{item.price} €</span>
                      <button className="px-4 py-2 border border-primary/30 text-primary text-xs tracking-wider uppercase rounded-sm hover:bg-primary/10 transition-colors">
                        Bestellen
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Speisekarte;

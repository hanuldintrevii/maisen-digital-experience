import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import sushiBoat from "@/assets/sushi-boat.jpg";
import sushiDetail from "@/assets/sushi-detail.jpg";
import geishaArt from "@/assets/geisha-art.jpg";

const dishes = [
  {
    name: "Sushi Boat Deluxe",
    description: "Unser prämiertes Sushi-Boot mit 40 erlesenen Nigiri, Maki & Sashimi",
    price: "89,90 €",
    image: sushiBoat,
    badge: "Chef Empfehlung",
  },
  {
    name: "Phở Bò Spezial",
    description: "Traditionelle Rindfleisch-Suppe mit frischen Kräutern & Reisnudeln",
    price: "14,90 €",
    image: sushiDetail,
    badge: "Bestseller",
  },
  {
    name: "Premium Wagyu Grill",
    description: "Gegrilltes Wagyu-Rind mit Teriyaki-Glasur & saisonalem Gemüse",
    price: "34,90 €",
    image: geishaArt,
    badge: "Neu",
  },
];

const HighlightDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Kulinarische Highlights
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Unsere <span className="text-gradient-gold">Empfehlungen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-card rounded-sm overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-primary-foreground text-xs font-medium tracking-wider uppercase rounded-sm">
                  {dish.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">{dish.price}</span>
                  <button className="px-4 py-2 border border-primary/30 text-primary text-xs tracking-wider uppercase rounded-sm hover:bg-primary/10 transition-colors">
                    Bestellen
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightDishes;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Julia M.",
    text: "Das beste Sushi, das ich je außerhalb Japans gegessen habe. Das Ambiente ist wunderschön – absolut empfehlenswert!",
    rating: 5,
    date: "vor 2 Wochen",
  },
  {
    name: "Thomas K.",
    text: "Die Phở ist unglaublich authentisch. Man schmeckt die stundenlange Zubereitung in jedem Löffel. Ein Traum!",
    rating: 5,
    date: "vor 1 Monat",
  },
  {
    name: "Sarah L.",
    text: "Perfektes Restaurant für besondere Anlässe. Das Service-Team ist aufmerksam und die Kirschblüten-Deko ist einmalig.",
    rating: 5,
    date: "vor 3 Wochen",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Kundenstimmen
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Was unsere Gäste <span className="text-gradient-gold">sagen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-gold/10 rounded-sm p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                „{review.text}"
              </p>
              <div className="divider-gold mb-4" />
              <div className="flex items-center justify-between">
                <span className="font-display text-foreground">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImg from "@/assets/restaurant-interior.jpg";

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={interiorImg}
                alt="MAISEN Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Unsere Geschichte
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Tradition trifft{" "}
              <span className="text-gradient-gold">Innovation</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bei MAISEN vereinen wir die besten kulinarischen Traditionen Vietnams und Japans 
                zu einem einzigartigen Genusserlebnis. Jedes Gericht erzählt eine Geschichte 
                von Handwerk, Frische und Leidenschaft.
              </p>
              <p>
                Unsere Küche setzt auf höchste Qualität: Frische Zutaten, traditionelle 
                Zubereitungsmethoden und ein Augenmerk für Details, das jeden Bissen 
                unvergesslich macht.
              </p>
            </div>
            <div className="divider-gold my-8" />
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: "100%", label: "Frische Zutaten" },
                { value: "15+", label: "Jahre Erfahrung" },
                { value: "★★★★★", label: "Bewertung" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

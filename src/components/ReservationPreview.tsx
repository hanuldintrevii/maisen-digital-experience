import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";
import terrasseImg from "@/assets/terrasse-lanterns.jpg";

const ReservationPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${terrasseImg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Reservierung
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Sichern Sie sich{" "}
            <span className="text-gradient-gold">Ihren Tisch</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Genießen Sie einen unvergesslichen Abend in unserem Restaurant. 
            Reservieren Sie jetzt bequem online.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { icon: Calendar, label: "Datum wählen" },
              { icon: Clock, label: "Uhrzeit wählen" },
              { icon: Users, label: "Personenanzahl" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card/50 border border-gold/10 rounded-sm p-6 flex flex-col items-center gap-3"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          <Link
            to="/reservierung"
            className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity shadow-gold"
          >
            Jetzt reservieren
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationPreview;

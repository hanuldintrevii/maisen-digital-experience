import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Montag – Donnerstag", time: "11:30 – 22:00 Uhr" },
  { day: "Freitag – Samstag", time: "11:30 – 23:00 Uhr" },
  { day: "Sonntag", time: "12:00 – 22:00 Uhr" },
];

const OpeningHours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
              Besuchen Sie uns
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Öffnungszeiten & <span className="text-gradient-gold">Anfahrt</span>
            </h2>

            <div className="space-y-4 mb-8">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-3 border-b border-gold/10"
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{h.day}</span>
                  </div>
                  <span className="text-primary font-display">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Musterstraße 123, 12345 Stadt</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+49 000 000 00 00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-sm overflow-hidden border border-gold/10 h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4!2d13.4!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzAuMCJOIDEzwrAyNCcwLjAiRQ!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;

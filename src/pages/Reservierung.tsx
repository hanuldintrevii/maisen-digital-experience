import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin, MessageSquare, Check } from "lucide-react";
import terrasseImg from "@/assets/terrasse.jpg";

const timeSlots = [
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
];

const Reservierung = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    area: "innen",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">Reservierung eingegangen!</h2>
          <p className="text-muted-foreground mb-2">
            Vielen Dank, {formData.name}. Wir haben Ihre Reservierung für{" "}
            <span className="text-primary">{formData.guests} Personen</span> am{" "}
            <span className="text-primary">{formData.date}</span> um{" "}
            <span className="text-primary">{formData.time} Uhr</span> erhalten.
          </p>
          <p className="text-muted-foreground text-sm">
            Sie erhalten in Kürze eine Bestätigung per E-Mail.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${terrasseImg})` }} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 text-center">
          <p className="font-elegant text-primary tracking-[0.3em] uppercase text-sm mb-3">
            Ihr Tisch wartet
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            Tisch <span className="text-gradient-gold">reservieren</span>
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-gold/10 rounded-sm p-8 md:p-12 space-y-8"
          >
            {/* Personal */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">E-Mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">Telefon</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="+49 ..."
              />
            </div>

            <div className="divider-gold" />

            {/* Date & Time */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 text-primary" /> Datum *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="w-4 h-4 text-primary" /> Uhrzeit *
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Wählen...</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t} Uhr</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Users className="w-4 h-4 text-primary" /> Personen *
                </label>
                <select
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Person" : "Personen"}</option>
                  ))}
                  <option value="10+">Mehr als 10</option>
                </select>
              </div>
            </div>

            {/* Area */}
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-primary" /> Bereich
              </label>
              <div className="flex gap-4">
                {[
                  { value: "innen", label: "Innenbereich" },
                  { value: "aussen", label: "Terrasse" },
                  { value: "egal", label: "Keine Präferenz" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, area: opt.value })}
                    className={`flex-1 px-4 py-3 rounded-sm border text-sm transition-all duration-300 ${
                      formData.area === opt.value
                        ? "bg-gradient-gold text-primary-foreground border-transparent"
                        : "border-gold/20 text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MessageSquare className="w-4 h-4 text-primary" /> Sonderwünsche
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-secondary border border-gold/10 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Geburtstag, Allergien, besondere Wünsche..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              Reservierung absenden
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Reservierung;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday", time: "10:00 AM – 8:30 PM" },
  { day: "Tuesday", time: "10:00 AM – 8:30 PM" },
  { day: "Wednesday", time: "10:00 AM – 8:30 PM" },
  { day: "Thursday", time: "10:00 AM – 8:30 PM" },
  { day: "Friday", time: "10:00 AM – 8:30 PM" },
  { day: "Saturday", time: "10:00 AM – 7:30 PM" },
  { day: "Sunday", time: "10:30 AM – 1:00 PM" },
];

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/oUy6fXb8ndurKfFSA";
const WHATSAPP_URL = "https://wa.me/919448757499";
const PHONE_URL = "tel:+919448757499";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <p>Get In Touch</p>
          <h2>Visit Our Studio</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Address - clickable Google Maps link */}
          <motion.a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.15)" }}
            className="bg-card border border-border/50 p-8 text-center rounded-lg group cursor-pointer transition-colors duration-500 hover:border-accent/30 block"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors duration-500"
            >
              <MapPin className="w-6 h-6 text-accent" />
            </motion.div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-3">Address</h3>
            <p className="text-xs text-muted-foreground leading-[1.8] mb-3">
              Lingasugur Road, opp. Drishti Hospital, near Gandhi Chowk, Arab Mohalla, Androon Quilla, Raichur, Karnataka 584101
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium group-hover:underline">
              Open in Maps <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>

          {/* Phone & WhatsApp */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-card border border-border/50 p-8 text-center rounded-lg"
          >
            <motion.div
              whileHover={{ rotate: -10 }}
              className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5"
            >
              <Phone className="w-6 h-6 text-accent" />
            </motion.div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-3">Phone</h3>
            <motion.a
              href={PHONE_URL}
              whileHover={{ scale: 1.05 }}
              className="inline-block text-lg text-accent font-semibold hover:underline tracking-wide"
            >
              +91 94487 57499
            </motion.a>
            <div className="flex justify-center gap-3 mt-5">
              <motion.a
                href={PHONE_URL}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-all duration-300"
                title="Call Now"
              >
                <Phone className="w-4 h-4 text-accent" />
              </motion.a>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: "hsl(142 70% 45% / 0.15)" }}
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" style={{ color: "hsl(142 70% 45%)" }} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/sri_shankar_digitals/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-all duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-accent" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-accent" />
              </motion.a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-card border border-border/50 p-8 rounded-lg"
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5"
            >
              <Clock className="w-6 h-6 text-accent" />
            </motion.div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4 text-center">Hours</h3>
            <div className="space-y-2.5">
              {hours.map((h, i) => (
                <motion.div
                  key={h.day}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="text-foreground font-medium">{h.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden max-w-5xl mx-auto rounded-lg border border-border/30"
        >
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="block relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5!2d76.55478!3d16.20369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7b0a6e9c1c24d%3A0x8b0e3e0e0e0e0e0e!2sShri+Shankar+Digitals!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
              className="pointer-events-none"
            />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-foreground flex items-center gap-2">
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

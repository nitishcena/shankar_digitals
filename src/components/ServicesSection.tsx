import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Image, Frame, Gift, Printer, CreditCard, Truck, CalendarCheck } from "lucide-react";

const services = [
  { icon: Camera, title: "Studio Photography", desc: "Professional portraits, family shoots, and event coverage with state-of-the-art lighting.", badge: null },
  { icon: CreditCard, title: "Passport & ID Photos", desc: "Instant passport and ID photos ready in 5 minutes. Perfect specs for any document.", badge: "Quick Visit" },
  { icon: Printer, title: "Flex & Banner Printing", desc: "High-quality flex banners, vinyl prints, and signage for business and celebrations.", badge: "Delivery" },
  { icon: Frame, title: "Custom Photo Frames", desc: "Elegant wooden, metallic, and decorative frames in a wide range of styles and sizes.", badge: "Delivery" },
  { icon: Gift, title: "Personalized Gifts", desc: "Magic mugs, cushions, keychains, laminates — customized gifts for every occasion.", badge: "Delivery" },
  { icon: Image, title: "Album Designing", desc: "Beautiful wedding and event albums with premium designing, printing, and binding.", badge: null },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <p>What We Offer</p>
          <h2>Our Services</h2>
          <div className="divider" />
        </motion.div>

        {/* Service options badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5">
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">Delivery Available</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5">
            <CalendarCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">Quick Visit · Walk-in</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.12)" }}
              className="relative bg-card border border-border/50 p-10 rounded-lg group hover:border-accent/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/3 group-hover:to-accent/8 transition-all duration-700 rounded-lg" />
              
              <div className="relative z-10">
                {service.badge && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-0 right-0 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {service.badge === "Delivery" && <Truck className="w-3 h-3 inline mr-1 -mt-0.5" />}
                    {service.badge === "Quick Visit" && <CalendarCheck className="w-3 h-3 inline mr-1 -mt-0.5" />}
                    {service.badge}
                  </motion.span>
                )}

                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500"
                >
                  <service.icon className="w-6 h-6 text-accent transition-colors duration-500" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 tracking-tight">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-[1.8]">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

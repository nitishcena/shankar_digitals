import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="bg-foreground py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-background mb-2 sm:mb-3 tracking-tight">
            श्री Shankar Digitals
          </h3>
          <p className="text-[10px] sm:text-xs text-background/40 tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Studio · Flex · Frames · Personalized Gifts
          </p>
          <div className="w-10 sm:w-12 h-px bg-background/20 mx-auto mb-6 sm:mb-8" />
          <p className="text-[10px] sm:text-xs text-background/30 tracking-wide">
            © {new Date().getFullYear()} Shri Shankar Digitals — Raichur, Karnataka. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 sm:pt-24">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-[0.03]"
          style={{
            background: "conic-gradient(from 0deg, hsl(35 50% 50%), hsl(40 20% 96%), hsl(30 10% 12%), hsl(40 20% 96%), hsl(35 50% 50%))",
          }}
        />
      </div>

      {/* Floating decorative elements - desktop only */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-2 h-2 rounded-full bg-accent/30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-16 w-3 h-3 rounded-full bg-accent/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-32 w-1.5 h-1.5 rounded-full bg-accent/25 hidden lg:block"
      />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <img src={logoImg} alt="Shri Shankar Digitals" className="mx-auto w-40 sm:w-52 md:w-64 lg:w-72 drop-shadow-lg" />
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2 sm:mb-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[0.95]"
          >
            Elevate Your
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-5 sm:mb-6 md:mb-8">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-gradient-gold"
          >
            Memories.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-8 sm:mb-10 font-light tracking-wide leading-relaxed"
        >
          Premium photography studio, custom frames, personalized gifts & professional printing services in Raichur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 bg-foreground text-background text-xs font-semibold tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-500 text-center"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 border border-foreground/20 text-foreground text-xs font-semibold tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-all duration-500 text-center"
          >
            View Gallery
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground hidden sm:block">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

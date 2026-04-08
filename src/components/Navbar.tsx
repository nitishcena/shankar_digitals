import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Rely on native browser anchor jump for reliability across mobile OSs
    // but ensure the mobile menu closes after a micro-delay to prevent interruption.
    setTimeout(() => {
      setMobileOpen(false);
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl shadow-sm border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          whileHover={{ scale: 1.02 }}
          className="font-heading text-lg sm:text-xl font-bold tracking-wider text-foreground uppercase"
        >
          Sri Shankar <span className="font-body text-[10px] sm:text-xs font-light tracking-[0.3em] text-muted-foreground ml-1">DIGITALS</span>
        </motion.a>
 
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-500 tracking-[0.15em] uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
 
        <motion.a
          href="tel:+919448757499"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:inline-flex items-center gap-2 bg-foreground text-background px-5 xl:px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-500"
        >
          Call Now
        </motion.a>
 
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-1">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
 
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-border/30"
          >
            <div className="px-5 sm:px-8 py-6 sm:py-8 flex flex-col gap-4 sm:gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+919448757499"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-sm font-semibold tracking-wider uppercase mt-2"
              >
                Call: 94487 57499
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

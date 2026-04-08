import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919448757499"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
    style={{ background: "hsl(142 70% 45%)" }}
    title="Chat on WhatsApp"
  >
    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "hsl(0 0% 100%)" }} />
  </motion.a>
);

export default WhatsAppButton;

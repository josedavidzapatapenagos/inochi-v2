import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/573000000000"
      target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
};
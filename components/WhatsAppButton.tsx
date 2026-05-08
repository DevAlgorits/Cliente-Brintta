'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511954392016?text=Olá! Gostaria de solicitar um orçamento para os serviços da Brintta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 border border-green-400/30 backdrop-blur-sm z-50 group"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <FaWhatsapp className="text-3xl" />
      </motion.div>
      <motion.span
        className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-dark-900 text-white px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-dark-600 text-sm font-medium pointer-events-none"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        Falar no WhatsApp
      </motion.span>
    </motion.a>
  )
}
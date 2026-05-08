'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const whatsappNumber = '5511954392016'
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para os serviços da Brintta.')

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Seu negócio</span>
              <br />
              <span className="text-primary-400 inline-block">merece uma marca</span>
              <br />
              <span className="text-primary-300 inline-block">que vende.</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Design estratégico + impressão premium + personalização + praticidade em um só lugar.
              Transforme sua marca em um ativo que gera valor e credibilidade.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-3 py-4 px-8"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-semibold">Falar no WhatsApp</span>
              </a>

              <a
                href="#contato"
                className="btn-secondary flex items-center justify-center space-x-3 py-4 px-8"
              >
                <span className="font-semibold">Solicitar Orçamento</span>
                <FaArrowRight className="text-xl" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Atendimento rápido</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Preços transparentes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Design estratégico</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Images - Mockups */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative h-96 lg:h-full">
              {/* Business Cards Mockup */}
              <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg shadow-2xl border border-dark-600 p-4 transform rotate-6 z-20">
                <div className="h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-sm border border-dashed border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2"></div>
                    <p className="text-xs text-white/60">Seu Logo</p>
                    <p className="text-[10px] text-white/40">Nome do Cliente</p>
                  </div>
                </div>
              </div>

              {/* Packaging Mockup */}
              <div className="absolute top-20 left-0 w-56 h-40 bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg shadow-2xl border border-dark-600 p-3 transform -rotate-3 z-10">
                <div className="h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded border border-dashed border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-white/60">Embalagem Premium</p>
                  </div>
                </div>
              </div>

              {/* T-shirt Mockup */}
              <div className="absolute bottom-0 right-10 w-40 h-48 bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg shadow-2xl border border-dark-600 p-3 transform rotate-3 z-30">
                <div className="h-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-lg border border-dashed border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-2"></div>
                    <div className="w-full h-3 bg-white/20 rounded-full mb-1"></div>
                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Sticker Mockup */}
              <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-dark-700 to-dark-800 rounded-full shadow-2xl border border-dark-600 p-2 transform z-10">
                <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                  <div className="text-center text-white/60 text-xs">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-1"></div>
                    <p>Adesivo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
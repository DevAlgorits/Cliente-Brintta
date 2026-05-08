'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaComments } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Obrigado! Retornaremos em breve via WhatsApp ou email.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contato" className="py-20 md:py-32 relative bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Vamos criar algo</span>
            <br />
            <span className="text-primary-400 inline-block">incrível juntos?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fale com a gente. Entendemos suas necessidades, criamos soluções personalizadas e entregamos resultados que geram valor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <FaComments className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto, necessidades ou dúvidas..."
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                    required
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary py-4 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Porque falar conosco?
              </h3>
              <ul className="space-y-4">
                {[
                  'Entendemos seu negócio antes do design',
                  'Orçamentos transparentes e justos',
                  'Prazo realista e cumprido',
                  'Qualidade que impressiona clientes',
                  'Suporte durante e após o projeto'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                Ainda tem dúvidas?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Fale diretamente com nossa equipe e tire todas as suas questões em tempo real.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de tirar algumas dúvidas sobre os serviços da Brintta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium"
              >
                <span>Falar no WhatsApp</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
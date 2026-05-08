'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaStarHalf, FaUsers, FaCheckCircle, FaTrophy, FaComment } from 'react-icons/fa'
import { useState } from 'react'

export default function SocialProof() {
  const stats = [
    { number: "50+", label: "Projetos Entregues", icon: <FaCheckCircle /> },
    { number: "98%", label: "Satisfação", icon: <FaStar />, suffix: "%" },
    { number: "15min", label: "Resposta Média", icon: <FaComment /> },
    { number: "25+", label: "Clientes Ativos", icon: <FaUsers /> }
  ]

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Proprietária - Barbearia Cortes Premium",
      avatar: "MS",
      content: "Os cartões de visita feitos pela Brintta transformaram meu negócio. Clientes elogiam o visual e pedem indicações só pela carteira de cartões. A qualidade impressiona tanto quanto o serviço."
    },
    {
      name: "Carlos Oliveira",
      role: "Gerente - Restaurant Sabor",
      avatar: "CO",
      content: "O cardápio redesign não apenas ficou lindo, mas os pedidos aumentaram 30%. A forma como apresentam as informações mudou a percepção dos preços dos clientes. Investimento que valeu cada centavo."
    },
    {
      name: "Ana Costa",
      role: "Fisioterapeuta - Clínica Vitalidade",
      avatar: "AC",
      content: "Papelaria completa profissionalizou meu atendimento. Pacientes comentam que tudo parece de uma clínica grande. Detalhes fazem toda diferença quando queremos mostrar qualidade e dedicação."
    }
  ]

  const averageRating = 4.9

  return (
    <section className="py-20 md:py-32 bg-dark-900">
      <div className="container">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
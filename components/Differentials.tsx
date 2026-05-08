'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaLightbulb, FaAward, FaCheckCircle, FaTruck, FaUsers, FaHeart, FaChartLine } from 'react-icons/fa'

export default function Differentials() {
  const differentials = [
    {
      icon: <FaRocket />,
      title: 'Atendimento Rápido',
      description: 'Entendemos que tempo é dinheiro. Respostas em até 15 minutos durante o horário comercial. Seu projeto não espera.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Design Estratégico',
      description: 'Não vendemos beleza. Vendemos resultados. Cada pixel é pensado para gerar valor para seu negócio.',
    },
    {
      icon: <FaAward />,
      title: 'Qualidade Profissional',
      description: 'Materiais e acabamentos que transmitem credibilidade. Sua marca merece o que há de melhor no mercado.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Processo Simplificado',
      description: 'Facilitamos cada passo. Do briefing à entrega, você acompanha tudo sem complicações. Um ponto de contato.',
    },
    {
      icon: <FaTruck />,
      title: 'Entrega Facilitada',
      description: 'Logística pensada para você. Entregas rápidas e seguras para todo o Brasil. Sua marca sem fronteiras.',
    },
    {
      icon: <FaUsers />,
      title: 'Soluções Personalizadas',
      description: 'Seu negócio é único. Não trabalhamos com templates genéricos. Cada solução é pensada para suas necessidades específicas.',
    },
    {
      icon: <FaHeart />,
      title: 'Atendimento Humano',
      description: 'Você fala com gente de verdade. Profissionais que entendem design, negócios e se preocupam com seu resultado.',
    },
    {
      icon: <FaChartLine />,
      title: 'Valoriza Seu Negócio',
      description: 'Nosso trabalho é fazer seu visual vender mais. Cada material é um investimento no crescimento do seu negócio.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="diferenciais" className="py-20 md:py-32 relative bg-gradient-to-b from-dark-900 to-dark-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.05),transparent_50%)]"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Por que profissionais escolhem a Brintta
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Não somos uma gráfica.</span>
            <br />
            <span className="text-primary-400 inline-block">Somos sua parceira visual.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Enquanto gráficas vendem impressões, nós vendemos resultados. Entendemos que cada material é uma extensão da sua marca e um investimento no crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {differentials.map((differential, index) => (
            <motion.div
              key={differential.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Hover Effect Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-600/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative bg-dark-800/50 border border-dark-600 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary-500/50 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center text-2xl text-primary-400 transition-all duration-300 group-hover:from-primary-500/30 group-hover:to-primary-600/30">
                    {differential.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {differential.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-dark-600 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  A diferença que transforma
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Gráfica comum vende impresso</p>
                      <p className="text-gray-500 text-sm">Você recebe o produto e se vira com o resto</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Brintta entrega solução</p>
                      <p className="text-gray-400 text-sm">Design estratégico + produção + consultoria para gerar resultado</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  '✓ Entrega rápida sem perder qualidade',
                  '✓ Suporte humano que entende seu negócio',
                  '✓ Preços transparentes sem surpresas',
                  '✓ Qualidade que impressiona seus clientes',
                  '✓ Processo simples que economiza seu tempo'
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className={`flex items-center space-x-3 ${index === 4 ? 'text-primary-400 font-semibold' : 'text-gray-300'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { FaComments, FaLightbulb, FaFileInvoiceDollar, FaCogs, FaTruck, FaCheckCircle } from 'react-icons/fa'

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaComments />,
      title: "Contato via WhatsApp",
      description: "Você entra em contato. Nossa equipe responde rapidamente. Conversamos para entender suas necessidades e objetivos.",
      duration: "Resposta em até 15 min"
    },
    {
      icon: <FaLightbulb />,
      title: "Entendimento Profundo",
      description: "Vamos além do pedido. Entendemos seu público, mercado e objetivos para criar soluções que realmente funcionam.",
      duration: "Briefing completo"
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Design e Orçamento",
      description: "Apresentamos propostas visuais e orçamento transparente. Você aprova o que faz sentido para seu negócio.",
      duration: "1-3 dias úteis"
    },
    {
      icon: <FaCogs />,
      title: "Produção Premium",
      description: "Produzimos com os melhores parceiros. Cada detalhe é acompanhado para garantir a qualidade que você merece.",
      duration: "Tempo variável por projeto"
    },
    {
      icon: <FaTruck />,
      title: "Entrega ou Retirada",
      description: "Entrega rápida e segura para todo o Brasil. Ou retirar em nosso espaço de coworking no centro.",
      duration: "Prazo garantido"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="como-funciona" className="py-20 md:py-32 relative bg-gradient-to-b from-dark-950 to-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05),transparent_50%)]"></div>
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
            Maior simplicidade, melhores resultados
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Do contato à entrega:</span>
            <br />
            <span className="text-primary-400 inline-block">Simples assim.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada etapa foi desenhada para economizar seu tempo, reduzir stress e garantir resultados que fortalecem sua marca.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-72 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Mobile Timeline */}
          <motion.div
            className="absolute top-24 left-8 w-1 h-64 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute md:left-1/2 md:transform md:-translate-x-1/2 top-6 md:top-auto md:top-6 left-4 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                />

                {/* Content Grid */}
                <div className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  {/* Step Content - Left or Right */}
                  <motion.div
                    className={index % 2 === 0 ? 'md:col-start-1 md:col-end-2' : 'md:col-start-2 md:col-end-3'}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <div className={`max-w-md ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}>
                      <div className="card h-full bg-dark-800/50">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 justify-start md:justify-start">
                          <span className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                            {step.icon}
                          </span>
                          <span>{step.title}</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <span className="text-sm text-primary-400 font-medium inline-block bg-primary-500/10 rounded-full px-3 py-1">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Step */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-8 backdrop-blur-sm text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
            <FaCheckCircle />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Pronto para usar
          </h3>
          <p className="text-gray-400 mb-6">
            Você recebe materiais que não apenas impressionam, mas geram resultados para seu negócio.
          </p>
          <div className="text-sm text-primary-400 font-medium">
            Transformação completa da sua marca visual
          </div>
        </motion.div>
      </div>
    </section>
  )
}
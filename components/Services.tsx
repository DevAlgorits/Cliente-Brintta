'use client'

import { motion } from 'framer-motion'
import { FaAddressCard, FaFlag, FaTag, FaGift, FaPalette, FaInstagram, FaBoxOpen, FaTshirt, FaUtensils, FaBuilding } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaAddressCard />,
      title: 'Cartões de Visita',
      description: 'Primeira impressão profissional. Materiais premium que abrem portas e criam conexões valiosas para seu negócio.',
    },
    {
      icon: <FaFlag />,
      title: 'Banners',
      description: 'Presença marcante onde você precisar ser visto. Visibilidade estratégica para eventos, lojas e campanhas.',
    },
    {
      icon: <FaTag />,
      title: 'Adesivos Personalizados',
      description: 'Identidade em cada detalhe. Personalize produtos, embalagens e promova sua marca de forma criativa.',
    },
    {
      icon: <FaGift />,
      title: 'Brindes Corporativos',
      description: 'Relacionamento que gera valor. Presentes corporativos que fortalecem parcerias e fidelizam clientes.',
    },
    {
      icon: <FaPalette />,
      title: 'Identidade Visual',
      description: 'Sua marca com propósito. Criação completa de identidade visual que comunica valores e conquista mercado.',
    },
    {
      icon: <FaInstagram />,
      title: 'Social Media Design',
      description: 'Conteúdo que engaja. Posts profissionais para redes sociais que convertem seguidores em clientes.',
    },
    {
      icon: <FaBoxOpen />,
      title: 'Embalagens',
      description: 'Experiência de unboxing premium. Embalagens que protegem, apresentam e valorizam seu produto.',
    },
    {
      icon: <FaTshirt />,
      title: 'Camisetas Personalizadas',
      description: 'Sua marca para vestir. Camisetas personalizadas que unem equipe, promovem eventos e geram renda.',
    },
    {
      icon: <FaUtensils />,
      title: 'Cardápios',
      description: 'Atraia clientes com estilo. Cardápios que destacam seus pratos e aumentam o ticket médio.',
    },
    {
      icon: <FaBuilding />,
      title: 'Papelaria Empresarial',
      description: 'Credibilidade em cada detalhe. Papéis timbrados, pastas, assinaturas que profissionalizam sua comunicação.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const whatsappNumber = '5511999999999'
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para: ')

  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05),transparent_50%)]"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Soluções que</span>
            <span className="text-primary-400 inline-block"> transformam</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada material gráfico é uma oportunidade de fortalecer sua marca e gerar resultados.
            Selecione o que seu negócio precisa para crescer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="service-card h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-2xl text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span>Orçamento</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dois ou mais serviços?
            </h3>
            <p className="text-gray-400 mb-6">
              Pacotes personalizados que economizam até 25%. Solicite um orçamento completo.
            </p>
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento completo com múltiplos serviços.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center py-3 px-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Orçamento Completo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
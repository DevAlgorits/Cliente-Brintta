'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaSearchPlus, FaExternalLinkAlt } from 'react-icons/fa'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Barbearia Cortes Premium',
      category: 'Cartões + Identidade Visual',
      description: 'Rebranding completo para barbearia de alto padrão.',
      image: '/images/portfolio/barbearia.jpg'
    },
    {
      id: 2,
      title: 'Cafeteria Aroma',
      category: 'Cardápios + Embalagens',
      description: 'Identidade visual acolhedora e premium.',
      image: '/images/portfolio/cafeteria.jpg'
    },
    {
      id: 3,
      title: 'Clínica Vitalidade',
      category: 'Papelaria + Banners',
      description: 'Materiais que transmitem confiança e cuidado.',
      image: '/images/portfolio/clinica.jpg'
    },
    {
      id: 4,
      title: 'Restaurant Sabor',
      category: 'Menu + Cartões',
      description: 'Cardápios que vendem e marcas de mesa elegantes.',
      image: '/images/portfolio/restaurante.jpg'
    },
    {
      id: 5,
      title: 'Escritório Imóveis',
      category: 'Identidade + Materiais',
      description: 'Papelaria completa e brindes especiais.',
      image: '/images/portfolio/imobiliaria.jpg'
    },
    {
      id: 6,
      title: 'Estética Beleza',
      category: 'Cartões + Mídias Sociais',
      description: 'Materiais que geram confiança e beleza.',
      image: '/images/portfolio/estetica.jpg'
    }
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
    <section id="portfolio" className="py-20 md:py-32 relative bg-dark-900">
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
            Trabalhos que geraram resultado
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Portfólio em </span>
            <span className="text-primary-400 inline-block"> construção.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Estes são alguns dos projetos que ajudamos a transformar. Cada um conta uma história de como design estratégico gera valor real para negócios.
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-sm text-primary-400 font-medium block mb-2">
              Novos projetos a cada semana
            </span>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mx-auto mb-4"></div>
                    <p className="text-white/60 font-medium">{project.category}</p>
                    <p className="text-white/40 text-sm">{project.title}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-400 text-sm mb-2">
                    {project.category}
                  </p>
                  <p className="text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 text-sm font-medium"
                    >
                      <FaSearchPlus />
                      <span>Ampliar</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-gray-300 hover:text-white text-sm font-medium"
                    >
                      <FaExternalLinkAlt />
                      <span>Ver detalhes</span>
                    </motion.button>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clique para ver
                </div>
              </div>

              {/* Project Info (visible on mobile) */}
              <div className="mt-4 block sm:hidden">
                <h3 className="text-white font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-400 text-sm mb-2">
                  {project.category}
                </p>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer ver seu projeto aqui?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Trabalhamos com projetos que gerem resultado real. Se seu caso de sucesso tem impacto, vamos contar sua história.
            </p>
            <motion.a
              href="#contato"
              className="btn-primary inline-flex items-center py-3 px-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Conte sua história
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
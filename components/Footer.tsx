'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12 md:py-16">
      <div className="container">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              <span className="text-primary-400">B</span>rintta
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Design estratégico + produção premium + atendimento humano. Transformamos sua marca em um ativo que vende.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
              >
                <FaWhatsapp className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 border border-dark-600 rounded-full flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Cartões de Visita', 'Identidade Visual', 'Banners', 'Embalagens'].map((item) => (
                <li key={item}>
                  <Link href="#servicos" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {['Como Funciona', 'Portfólio', 'FAQ', 'Contato'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
            <div>
              <p className="text-gray-500 text-sm">
                © {currentYear} Brintta. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
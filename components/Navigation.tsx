'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-950/95 backdrop-blur-sm border-b border-dark-800 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-primary-400">B</span>rintta
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#servicos" className="text-gray-300 hover:text-white transition-colors">
              Serviços
            </Link>
            <Link href="#diferenciais" className="text-gray-300 hover:text-white transition-colors">
              Por Quê Brintta
            </Link>
            <Link href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Como Funciona
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfólio
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contato"
            className="hidden md:inline-block btn-primary py-2 px-6 text-sm"
          >
            Solicitar Orçamento
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brintta - Sua marca que vende',
  description: 'Serviços gráficos premium, identidade visual, brindes personalizados e soluções criativas para pequenos negócios. Design estratégico que valoriza sua empresa.',
  keywords: 'serviços gráficos, identidade visual, brindes personalizados, cartões de visita, design gráfico, impressão, branding',
  authors: [{ name: 'Brintta' }],
  creator: 'Brintta',
  publisher: 'Brintta',
  openGraph: {
    title: 'Brintta - Sua marca que vende',
    description: 'Design estratégico e soluções criativas para pequenos negócios',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brintta - Sua marca que vende',
    description: 'Design estratégico e soluções criativas para pequenos negócios',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
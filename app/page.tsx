import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Differentials from '@/components/Differentials'
import HowItWorks from '@/components/HowItWorks'
import Portfolio from '@/components/Portfolio'
import SocialProof from '@/components/SocialProof'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Differentials />
      <HowItWorks />
      <Portfolio />
      <SocialProof />
      <Contact />
      <Footer />
    </>
  )
}
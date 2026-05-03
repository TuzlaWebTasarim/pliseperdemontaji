import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import BrandValue from '@/components/BrandValue'
import HowItWorks from '@/components/HowItWorks'
import TrustSection from '@/components/TrustSection'
import ServiceRegions from '@/components/ServiceRegions'
import MaterialQuality from '@/components/MaterialQuality'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <HowItWorks />
        <TrustSection />
        <ServiceRegions />
        <MaterialQuality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}

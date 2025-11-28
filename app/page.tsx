import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/navigation/Footer'
import {
  Hero,
  ProblemStatement,
  SolutionOverview,
  Services,
  HowItWorks,
  SocialProof,
  FAQ,
  LeadMagnet,
  FinalCTA,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Services />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  )
}

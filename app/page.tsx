import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"
import { CircuitBackground } from "@/components/circuit-background"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <RoadmapSection />
        <Footer />
      </div>
    </main>
  )
}

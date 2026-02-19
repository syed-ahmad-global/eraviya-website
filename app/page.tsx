import { Hero } from "@/components/home/hero"
import { ServicesPreview } from "@/components/home/services-preview"
import { PortfolioTeaser } from "@/components/home/portfolio-teaser"
import { SocialProof } from "@/components/home/social-proof"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioTeaser />
      <SocialProof />
      <CTASection />
    </>
  )
}

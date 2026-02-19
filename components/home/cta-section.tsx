import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground">
      {/* Accent glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Let us discuss how our AI-powered solutions and modern development expertise can help you
          achieve your goals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-electric text-electric-foreground hover:bg-electric/90"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
          >
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

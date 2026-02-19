"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleField } from "@/components/home/particle-field"
import { InteractiveCodeVisual } from "@/components/home/interactive-code-visual"

// ============================================================================
// HERO VISUAL CUSTOMIZATION
// ============================================================================
// To switch between different visual effects:
//
// 1. PARTICLE FIELD (Background):
//    Edit: components/home/particle-field.tsx
//    Options at top of file:
//    - Original: Connected Particles with Mouse Interaction
//    - NeuralNetwork: Pulsing nodes with connections
//    - DataFlow: Streams of particles flowing
//    - GeometricShapes: Floating rotating shapes
//    - MatrixRain: Classic Matrix falling characters
//    - WaveInterference: Multiple wave patterns
//
//    Simply comment/uncomment the variation you want to use.
//
// 2. INTERACTIVE CODE VISUAL (Right side):
//    Edit: components/home/interactive-code-visual.tsx
//    Options at top of file:
//    - Original: Orbiting Code Terminal with 3D perspective
//    - CardStack3D: 3D card stack with interactive spread
//    - FloatingTechIcons: Floating icons in 3D space
//    - ProjectCarousel: 3D carousel showcasing portfolio
//    - GlitchTerminal: Large terminal with glitched text
//    - HolographicProjection: Sci-fi holographic display
//
//    Simply comment/uncomment the variation you want to use.
// ============================================================================

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--electric)_0%,_transparent_50%)] opacity-15" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--teal)_0%,_transparent_50%)] opacity-15" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-12 sm:flex-row sm:items-center sm:gap-8 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-16 xl:py-0 2xl:py-20">
        {/* Left - Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Tag */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-medium shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] dark:border-white/20 dark:bg-foreground/10">
            <Sparkles className="h-4 w-4 text-electric" />
            <span className="text-foreground/80">AI-Powered Solutions for Modern Business</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Where Intelligence{" "}
            <span className="text-electric">Meets</span>{" "}
            Innovation
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Building intelligent solutions that drive business growth through cutting-edge AI and
            modern development practices.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-electric text-electric-foreground hover:bg-electric/90"
            >
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Right - Interactive Visual */}
        <div className="hidden flex-1 lg:flex lg:justify-end">
          <InteractiveCodeVisual />
        </div>
      </div>

      {/* Stats - full width below */}
      <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10 md:grid-cols-4 md:gap-16">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl font-bold text-electric md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinTech Startup",
    content:
      "Eraviya delivered an AI-powered fraud detection system that exceeded our expectations. Their team's deep understanding of ML and clean code practices made the entire collaboration seamless.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "VP Engineering, Enterprise Corp",
    content:
      "The team at Eraviya automated our entire onboarding workflow, saving us 200+ hours monthly. Their expertise in both low-code tools and custom development is unmatched.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    role: "Founder, HealthTech",
    content:
      "From concept to launch in 8 weeks. Eraviya built our cross-platform telehealth app with incredible attention to detail and performance. Highly recommend for any startup.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Product Manager, LogiTech Solutions",
    content:
      "Eraviya's full-stack team built a real-time analytics dashboard that transformed how we track supply chain data. Their React and Node.js expertise is top-tier.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CEO, EdTech Platform",
    content:
      "Eraviya integrated a custom LLM into our learning platform that personalizes content for 50,000+ students. The results speak for themselves - engagement up 60%.",
    rating: 5,
  },
]

export function SocialProof() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
            Testimonials
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Hear from the teams and leaders who have partnered with us to build transformative
            solutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="mb-6 h-10 w-10 text-electric/20" />

            <p className="mb-8 text-lg leading-relaxed text-card-foreground md:text-xl">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif font-semibold text-card-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-chart-4 text-chart-4"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-9 w-9 border-border text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-electric" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="h-9 w-9 border-border text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

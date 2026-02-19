"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTechIcon } from "@/lib/tech-icons"

const projects = [
  {
    slug: "ai-customer-support",
    title: "AI-Powered Customer Support Platform",
    description:
      "Built an intelligent chatbot system that reduced support ticket volume by 45% using NLP and GPT-4 integration.",
    tags: ["GPT-4", "Next.js", "Python", "NLP"],
    category: "AI Solutions",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    description:
      "Full-stack analytics platform providing real-time insights on sales, inventory, and customer behavior patterns.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    category: "Full Stack",
  },
  {
    slug: "healthcare-app",
    title: "Healthcare Mobile Application",
    description:
      "Cross-platform telehealth app enabling video consultations and patient management for 10,000+ users.",
    tags: ["React Native", "Firebase", "WebRTC"],
    category: "Mobile",
  },
  {
    slug: "workflow-automation",
    title: "Enterprise Workflow Automation",
    description:
      "Automated 200+ manual processes using n8n, saving 120+ hours per month for an enterprise logistics company.",
    tags: ["n8n", "Make.com", "REST API"],
    category: "Automation",
  },
  {
    slug: "real-estate-prediction",
    title: "Real Estate Price Prediction Engine",
    description:
      "Machine learning model achieving 94% accuracy in property valuations across 15 major metropolitan markets.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    category: "AI Solutions",
  },
  {
    slug: "saas-platform",
    title: "SaaS Multi-Tenant Platform",
    description:
      "White-label SaaS solution with role-based access, billing integration, and customizable dashboards.",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    category: "Full Stack",
  },
]

export function PortfolioTeaser() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
              Our Work
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              See how we have helped businesses transform with intelligent technology solutions.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-electric">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 text-foreground backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const Icon = getTechIcon(tag)
                    return (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-border text-muted-foreground"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                        {tag}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

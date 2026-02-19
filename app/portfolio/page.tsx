"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTechIcon } from "@/lib/tech-icons"

type Project = {
  slug: string
  title: string
  client: string
  industry: string
  description: string
  tags: string[]
  service: string
  featured: boolean
}

const projects: Project[] = [
  {
    slug: "ai-customer-support",
    title: "AI-Powered Customer Support Platform",
    client: "FinTech Startup",
    industry: "Finance",
    description:
      "Built an intelligent chatbot system that reduced support ticket volume by 45% using NLP and GPT-4 integration.",
    tags: ["GPT-4", "Next.js", "Python", "NLP"],
    service: "AI Solutions",
    featured: true,
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    client: "Retail Corp",
    industry: "E-Commerce",
    description:
      "Full-stack analytics platform providing real-time insights on sales, inventory, and customer behavior patterns.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    service: "Full Stack",
    featured: true,
  },
  {
    slug: "healthcare-app",
    title: "Healthcare Mobile Application",
    client: "HealthTech Co",
    industry: "Healthcare",
    description:
      "Cross-platform telehealth app enabling video consultations and patient management for 10,000+ users.",
    tags: ["React Native", "Firebase", "WebRTC"],
    service: "Mobile",
    featured: true,
  },
  {
    slug: "workflow-automation",
    title: "Enterprise Workflow Automation",
    client: "LogiTech Solutions",
    industry: "Logistics",
    description:
      "Automated 200+ manual processes using n8n, saving 120+ hours per month for an enterprise logistics company.",
    tags: ["n8n", "Make.com", "REST API"],
    service: "Automation",
    featured: false,
  },
  {
    slug: "real-estate-prediction",
    title: "Real Estate Price Prediction Engine",
    client: "PropTech Startup",
    industry: "Real Estate",
    description:
      "Machine learning model achieving 94% accuracy in property valuations across 15 major metropolitan markets.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    service: "AI Solutions",
    featured: true,
  },
  {
    slug: "saas-platform",
    title: "SaaS Multi-Tenant Platform",
    client: "Enterprise Client",
    industry: "Technology",
    description:
      "White-label SaaS solution with role-based access, billing integration, and customizable dashboards.",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    service: "Full Stack",
    featured: false,
  },
  {
    slug: "inventory-management",
    title: "Smart Inventory Management",
    client: "Manufacturing Co",
    industry: "Manufacturing",
    description:
      "AI-powered inventory forecasting reducing overstock by 30% and stockouts by 55% using predictive analytics.",
    tags: ["Python", "scikit-learn", "React", "PostgreSQL"],
    service: "AI Solutions",
    featured: false,
  },
  {
    slug: "food-delivery-app",
    title: "On-Demand Food Delivery App",
    client: "FoodTech Startup",
    industry: "Food & Beverage",
    description:
      "Cross-platform delivery app with real-time tracking, in-app payments, and driver management for 50+ restaurants.",
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    service: "Mobile",
    featured: false,
  },
]

const filterOptions = {
  service: ["All", "AI Solutions", "Full Stack", "Mobile", "Automation"],
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.service === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              Our Work
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              Portfolio & Case Studies
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Explore our portfolio of successful projects across AI, web development, mobile apps,
              and workflow automation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-2">
            {filterOptions.service.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeFilter === option
                  ? "bg-electric text-electric-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-52 bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-electric transition-transform group-hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 text-foreground backdrop-blur-sm"
                    >
                      {project.service}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-electric text-electric-foreground">Featured</Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.client} &middot; {project.industry}
                  </p>
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
                          className="flex items-center gap-1 border-border text-muted-foreground"
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

          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              No projects found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Want to Start a Similar Project?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Let us bring your vision to life with our proven expertise and modern technology stack.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-electric text-electric-foreground hover:bg-electric/90"
            >
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

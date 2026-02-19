"use client"

import Link from "next/link"
import {
  Brain,
  Code,
  Smartphone,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Database,
  Server,
  Layers,
  Bot,
  BarChart3,
  Eye as EyeIcon,
  MessageSquare,
  Cpu,
  Palette,
  Plug,
  Timer,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTechIcon } from "@/lib/tech-icons"

const services = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions Development",
    tagline: "Unlock the Power of Artificial Intelligence",
    description:
      "We build custom AI solutions that transform how businesses operate, from intelligent chatbots and predictive analytics to computer vision and NLP systems.",
    capabilities: [
      { icon: Bot, label: "Custom LLM Integration (GPT-4, Claude, open-source)" },
      { icon: MessageSquare, label: "Natural Language Processing & Chatbots" },
      { icon: EyeIcon, label: "Computer Vision & Image Recognition" },
      { icon: BarChart3, label: "Predictive Analytics & Forecasting" },
      { icon: Cpu, label: "Machine Learning Model Development" },
      { icon: Sparkles, label: "Generative AI Applications" },
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "FastAPI"],
    useCases: [
      "Automated customer support with AI chatbots",
      "Document processing and data extraction",
      "Product recommendation engines",
      "Fraud detection and risk assessment",
      "Content generation and summarization",
    ],
    accent: "bg-electric/10 text-electric",
  },
  {
    id: "fullstack",
    icon: Code,
    title: "Full Stack Development",
    tagline: "Modern, Scalable Web Applications",
    description:
      "We deliver end-to-end web applications using the latest frameworks and best practices. From responsive React frontends to robust backend APIs, we build for scale.",
    capabilities: [
      { icon: Globe, label: "React / Next.js Frontend Development" },
      { icon: Server, label: "Node.js / Python Backend APIs" },
      { icon: Database, label: "Database Design & Optimization" },
      { icon: Layers, label: "Microservices Architecture" },
      { icon: Plug, label: "Third-Party API Integrations" },
      { icon: Palette, label: "UI/UX Design & Implementation" },
    ],
    techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "Tailwind CSS"],
    useCases: [
      "SaaS platforms and dashboards",
      "E-commerce applications",
      "Enterprise resource planning tools",
      "Real-time collaborative platforms",
      "Content management systems",
    ],
    accent: "bg-teal/10 text-teal",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile & Cross-Platform",
    tagline: "One Codebase, Every Platform",
    description:
      "We create high-performance mobile applications that deliver native-like experiences on iOS and Android from a single codebase, reducing time-to-market and development costs.",
    capabilities: [
      { icon: Smartphone, label: "React Native Development" },
      { icon: Layers, label: "Flutter Development" },
      { icon: Globe, label: "Progressive Web Apps (PWAs)" },
      { icon: Plug, label: "Native Module Integration" },
      { icon: Database, label: "Offline-First Architecture" },
      { icon: Sparkles, label: "Push Notifications & Real-Time" },
    ],
    techStack: ["React Native", "Flutter", "Expo", "Firebase", "WebRTC", "GraphQL"],
    useCases: [
      "Telehealth and wellness apps",
      "On-demand delivery platforms",
      "Social networking applications",
      "IoT device companion apps",
      "Field service management tools",
    ],
    accent: "bg-chart-3/10 text-chart-3",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "No-Code/Low-Code Automation",
    tagline: "Automate Everything, Scale Effortlessly",
    description:
      "We streamline business operations by building intelligent workflow automations using platforms like n8n, Make.com, and custom integrations that save hundreds of hours.",
    capabilities: [
      { icon: Workflow, label: "n8n & Make.com Workflows" },
      { icon: Plug, label: "API & Webhook Integrations" },
      { icon: Timer, label: "Scheduled & Triggered Automations" },
      { icon: Database, label: "Data Sync & ETL Pipelines" },
      { icon: MessageSquare, label: "Automated Communication Flows" },
      { icon: BarChart3, label: "Reporting & Dashboard Automation" },
    ],
    techStack: ["n8n", "Make.com", "Zapier", "GoHighLevel", "REST APIs", "Webhooks"],
    useCases: [
      "Lead capture and CRM automation",
      "Invoice and billing workflows",
      "Employee onboarding processes",
      "Inventory and order management",
      "Social media content scheduling",
    ],
    accent: "bg-chart-4/10 text-chart-4",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              Our Services
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              End-to-End Technology Solutions
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              From AI-powered intelligence to seamless automation, we provide comprehensive services
              that drive measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Header */}
            <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.accent}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-electric">
                    {service.tagline}
                  </p>
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <Button
                asChild
                className="shrink-0 bg-electric text-electric-foreground hover:bg-electric/90"
              >
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Capabilities */}
              <div>
                <h3 className="mb-6 font-serif text-xl font-semibold text-foreground">
                  Key Capabilities
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <cap.icon className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                      <span className="text-sm font-medium text-card-foreground">{cap.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases & Tech Stack */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                    Use Cases
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-chart-3" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => {
                      const Icon = getTechIcon(tech)
                      return (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-2 bg-secondary text-secondary-foreground">
                          {Icon && <Icon className="h-4 w-4 shrink-0" />}
                          {tech}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Let us discuss your requirements and find the perfect solution for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </section>
    </>
  )
}

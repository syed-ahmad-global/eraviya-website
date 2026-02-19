import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const caseStudies: Record<
  string,
  {
    title: string
    client: string
    industry: string
    service: string
    timeline: string
    overview: string
    challenge: string
    solution: string
    process: string[]
    results: string[]
    techStack: string[]
  }
> = {
  "ai-customer-support": {
    title: "AI-Powered Customer Support Platform",
    client: "FinTech Startup",
    industry: "Finance",
    service: "AI Solutions",
    timeline: "10 weeks",
    overview:
      "A leading fintech startup needed to scale their customer support without proportionally scaling headcount. We built an AI-powered support system using GPT-4 and NLP.",
    challenge:
      "The client was receiving 5,000+ support tickets daily, with response times averaging 12 hours. Manual processing was costly and inconsistent in quality. They needed an intelligent system that could handle common queries automatically while escalating complex issues to human agents.",
    solution:
      "We developed a custom AI chatbot using GPT-4 fine-tuned on the client's knowledge base. The system uses NLP to classify intent, extract relevant information, and provide contextual responses. A seamless handoff mechanism routes complex queries to human agents with full conversation context.",
    process: [
      "Discovery & knowledge base analysis",
      "NLP model training and fine-tuning",
      "Chat interface development with Next.js",
      "Integration with existing CRM and ticketing system",
      "Testing, iteration, and deployment",
    ],
    results: [
      "45% reduction in support ticket volume",
      "Average response time reduced from 12 hours to 30 seconds",
      "92% customer satisfaction rate for AI-handled queries",
      "60% cost reduction in support operations",
      "Seamless handoff to human agents for complex issues",
    ],
    techStack: ["GPT-4", "LangChain", "Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
  },
  "ecommerce-dashboard": {
    title: "E-Commerce Analytics Dashboard",
    client: "Retail Corp",
    industry: "E-Commerce",
    service: "Full Stack",
    timeline: "8 weeks",
    overview:
      "A mid-market retail company needed a centralized analytics dashboard to monitor sales, inventory, and customer behavior in real-time across their 12 online stores.",
    challenge:
      "Data was siloed across multiple platforms with no unified view. Manual reporting took 20+ hours weekly, and decisions were based on outdated information. The company needed real-time visibility into their entire e-commerce operation.",
    solution:
      "We built a full-stack analytics dashboard with React and Node.js that aggregates data from all 12 stores via API integrations. Real-time data pipelines feed interactive D3.js visualizations, enabling instant insights on sales trends, inventory levels, and customer segments.",
    process: [
      "Requirements gathering and data mapping",
      "API integration layer development",
      "Real-time data pipeline architecture",
      "Interactive dashboard UI with D3.js",
      "Performance optimization and deployment",
    ],
    results: [
      "Real-time visibility across all 12 stores",
      "20+ hours saved weekly on manual reporting",
      "15% increase in inventory turnover",
      "Data-driven decisions improving margin by 8%",
      "Sub-second dashboard load times",
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "D3.js", "Redis", "Docker"],
  },
  "healthcare-app": {
    title: "Healthcare Mobile Application",
    client: "HealthTech Co",
    industry: "Healthcare",
    service: "Mobile",
    timeline: "12 weeks",
    overview:
      "A healthcare startup needed a cross-platform telehealth app that enables patients to consult doctors via video, manage appointments, and access health records securely.",
    challenge:
      "The client needed a HIPAA-compliant mobile application that works seamlessly on both iOS and Android. Video quality, data security, and an intuitive UX for elderly patients were critical requirements.",
    solution:
      "We developed a React Native app with WebRTC for video consultations, Firebase for real-time data, and end-to-end encryption for all patient data. The app features large, accessible UI elements and a simplified patient journey.",
    process: [
      "UX research and accessibility audit",
      "Cross-platform architecture design",
      "WebRTC video integration",
      "HIPAA compliance implementation",
      "Beta testing with 500 patients and launch",
    ],
    results: [
      "10,000+ active users within 3 months",
      "4.8 star rating on both app stores",
      "98% video call success rate",
      "Full HIPAA compliance achieved",
      "30% reduction in no-show appointments",
    ],
    techStack: ["React Native", "Expo", "Firebase", "WebRTC", "Node.js", "MongoDB"],
  },
  "workflow-automation": {
    title: "Enterprise Workflow Automation",
    client: "LogiTech Solutions",
    industry: "Logistics",
    service: "Automation",
    timeline: "6 weeks",
    overview:
      "A logistics enterprise needed to automate their manual workflows spanning order processing, invoicing, and driver dispatch to handle growing demand without increasing staff.",
    challenge:
      "Over 200 manual processes were creating bottlenecks, errors, and delays. Staff spent 60% of their time on repetitive data entry and status updates across disconnected systems.",
    solution:
      "We designed and deployed 40+ automated workflows using n8n and Make.com, connecting their ERP, CRM, and communication tools. Trigger-based automations handle order routing, invoice generation, and real-time driver notifications.",
    process: [
      "Process audit and workflow mapping",
      "Automation architecture design",
      "n8n and Make.com workflow development",
      "System integration and API configuration",
      "Training and gradual rollout",
    ],
    results: [
      "200+ processes automated",
      "120+ hours saved per month",
      "95% reduction in data entry errors",
      "Order processing time reduced by 70%",
      "Zero additional headcount needed for 2x growth",
    ],
    techStack: ["n8n", "Make.com", "REST APIs", "Webhooks", "PostgreSQL", "Slack API"],
  },
  "real-estate-prediction": {
    title: "Real Estate Price Prediction Engine",
    client: "PropTech Startup",
    industry: "Real Estate",
    service: "AI Solutions",
    timeline: "14 weeks",
    overview:
      "A proptech startup wanted a machine learning engine to predict property valuations across major metropolitan markets, powering their pricing recommendations for agents and buyers.",
    challenge:
      "Accurate property valuation required analyzing hundreds of variables including location, amenities, market trends, and comparable sales. Existing models had 70-75% accuracy, which was insufficient for client confidence.",
    solution:
      "We built an ensemble ML model combining gradient boosting and neural networks, trained on 5 million+ property records. A FastAPI backend serves predictions via API, and a React dashboard visualizes market trends and individual property analyses.",
    process: [
      "Data collection and feature engineering",
      "Model experimentation and selection",
      "Ensemble model training and validation",
      "API development with FastAPI",
      "Dashboard development and deployment",
    ],
    results: [
      "94% prediction accuracy achieved",
      "Covering 15 major metropolitan markets",
      "Sub-second prediction response time",
      "Adopted by 200+ real estate agents",
      "20% improvement over previous model accuracy",
    ],
    techStack: ["Python", "TensorFlow", "XGBoost", "FastAPI", "React", "PostgreSQL", "AWS"],
  },
  "saas-platform": {
    title: "SaaS Multi-Tenant Platform",
    client: "Enterprise Client",
    industry: "Technology",
    service: "Full Stack",
    timeline: "16 weeks",
    overview:
      "An enterprise client needed a white-label SaaS platform with multi-tenancy, role-based access, Stripe billing, and customizable dashboards for their B2B customers.",
    challenge:
      "Building a secure multi-tenant architecture that isolates data between customers while sharing infrastructure was the core challenge. The platform also needed flexible customization per tenant.",
    solution:
      "We built a Next.js and Supabase multi-tenant platform with Row Level Security for data isolation, Stripe for billing, and a theming engine for per-tenant customization. Admin dashboards enable full customer management.",
    process: [
      "Multi-tenant architecture design",
      "Database schema with RLS policies",
      "Auth and role-based access control",
      "Stripe billing integration",
      "Theming engine and admin panel",
    ],
    results: [
      "50+ tenants onboarded in first quarter",
      "99.9% uptime achieved",
      "Zero data leakage incidents",
      "Self-service onboarding reducing setup time by 80%",
      "Recurring revenue model enabled by Stripe integration",
    ],
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "TypeScript", "Vercel"],
  },
  "inventory-management": {
    title: "Smart Inventory Management",
    client: "Manufacturing Co",
    industry: "Manufacturing",
    service: "AI Solutions",
    timeline: "10 weeks",
    overview:
      "A manufacturing company needed AI-powered inventory forecasting to reduce overstock and prevent stockouts across their supply chain.",
    challenge:
      "Traditional forecasting methods were leading to 25% overstock and frequent stockouts, costing the company millions annually. They needed predictive analytics that account for seasonality, trends, and supply chain disruptions.",
    solution:
      "We developed a predictive analytics system using scikit-learn and time series analysis, integrated into a React dashboard. The system provides daily forecasts, automated reorder recommendations, and anomaly detection for supply chain disruptions.",
    process: [
      "Historical data analysis and cleansing",
      "Time series model development",
      "Dashboard design and development",
      "Integration with ERP system",
      "Validation and deployment",
    ],
    results: [
      "30% reduction in overstock",
      "55% reduction in stockouts",
      "Estimated annual savings of $2.1M",
      "Daily automated forecasts for 5,000+ SKUs",
      "Early warning system for supply chain disruptions",
    ],
    techStack: ["Python", "scikit-learn", "Pandas", "React", "PostgreSQL", "FastAPI"],
  },
  "food-delivery-app": {
    title: "On-Demand Food Delivery App",
    client: "FoodTech Startup",
    industry: "Food & Beverage",
    service: "Mobile",
    timeline: "14 weeks",
    overview:
      "A food-tech startup needed a cross-platform delivery app with real-time tracking, in-app payments, and a driver management system to launch in their local market.",
    challenge:
      "The app needed to handle real-time location tracking for drivers, support concurrent orders, manage restaurant partnerships, and provide a smooth payment experience. Performance on budget Android devices was critical.",
    solution:
      "We built a React Native app with Socket.io for real-time features, MongoDB for flexible data storage, and a Node.js backend. The driver app and customer app share a common codebase with role-based views.",
    process: [
      "User journey mapping for customers, restaurants, and drivers",
      "Real-time architecture design",
      "Cross-platform app development",
      "Payment gateway integration",
      "Beta testing and market launch",
    ],
    results: [
      "50+ restaurant partners at launch",
      "5,000+ downloads in the first month",
      "Average delivery time of 28 minutes",
      "4.6 star app store rating",
      "Real-time tracking with sub-second updates",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe", "Google Maps API"],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) return { title: "Case Study Not Found" }
  return {
    title: study.title,
    description: study.overview,
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-muted py-24 text-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="border-foreground/20 bg-foreground/10 text-foreground">
              {study.service}
            </Badge>
            <Badge className="border-foreground/20 bg-foreground/10 text-foreground">
              {study.industry}
            </Badge>
          </div>
          <h1 className="max-w-3xl text-balance font-serif text-3xl font-bold md:text-5xl">
            {study.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm opacity-70">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {study.client}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {study.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Overview</h2>
            <p className="leading-relaxed text-muted-foreground">{study.overview}</p>
          </div>

          {/* Challenge */}
          <div className="mb-16 rounded-xl border border-border bg-muted p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">The Challenge</h2>
            <p className="leading-relaxed text-muted-foreground">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Our Solution</h2>
            <p className="leading-relaxed text-muted-foreground">{study.solution}</p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              Development Process
            </h2>
            <div className="flex flex-col gap-4">
              {study.process.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric text-sm font-bold text-electric-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-16 rounded-xl border border-chart-3/30 bg-chart-3/5 p-8">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Results</h2>
            <div className="flex flex-col gap-3">
              {study.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-3" />
                  <p className="font-medium text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <h3 className="font-serif text-2xl font-bold text-card-foreground">
              Want to Start a Similar Project?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Let us bring your vision to life with our proven expertise.
            </p>
            <div className="mt-6">
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
        </div>
      </section>
    </>
  )
}

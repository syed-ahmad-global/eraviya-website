import type { Metadata } from "next"
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Zap,
  Award,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eraviya Solutions, our mission, values, and the team behind intelligent software solutions.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly explore emerging technologies to deliver cutting-edge solutions that keep our clients ahead.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Open communication, honest timelines, and clear documentation are the foundation of every partnership.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We tailor every solution to your unique business needs and goals.",
  },
  {
    icon: Zap,
    title: "Quality & Speed",
    description:
      "We deliver production-ready solutions quickly without compromising on code quality or performance.",
  },
]

const team = [
  {
    name: "Muhammad Usman",
    role: "Founder & CEO",
    bio: "Full-stack developer and AI specialist with a passion for building intelligent solutions that solve real-world business problems.",
  },
  {
    name: "Ali Raza",
    role: "Lead AI Engineer",
    bio: "Expert in NLP, computer vision, and LLM integration with experience building enterprise-grade AI systems.",
  },
  {
    name: "Fatima Noor",
    role: "Senior Full Stack Developer",
    bio: "React and Node.js specialist focused on scalable architectures and exceptional user experiences.",
  },
  {
    name: "Hassan Malik",
    role: "Mobile & Automation Lead",
    bio: "Cross-platform development expert with deep knowledge of React Native, Flutter, and workflow automation tools.",
  },
]

const differentiators = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "50+ projects delivered across AI, full-stack, mobile, and automation domains.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description:
      "Every project is measured by business outcomes, not just technical deliverables.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile methodology ensures you see progress weekly with production-ready code.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Best practices in security, compliance, and data privacy built into every solution.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              About Us
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              Building Future with Intelligent Technology
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Eraviya Solutions specializes in AI, full-stack engineering, mobile apps, and workflow automation, partnering with clients to build solutions that drive measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric/10 text-electric">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-card-foreground">Our Mission</h2>
              <p className="leading-relaxed text-muted-foreground">
                To empower businesses of all sizes with intelligent, scalable technology solutions
                that bridge the gap between complex AI capabilities and real-world business value.
                We believe every organization deserves access to cutting-edge technology.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-card-foreground">Our Vision</h2>
              <p className="leading-relaxed text-muted-foreground">
                To be a globally recognized leader in AI-driven software solutions, known for
                technical excellence, ethical practices, and transformative business impact. We
                envision a future where intelligent automation amplifies human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
              Our Values
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Guides Us
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
              Our Approach
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              How We Work
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your business goals, challenges, and technical requirements." },
              { step: "02", title: "Strategy", desc: "Architecture planning, tech stack selection, and project roadmap creation." },
              { step: "03", title: "Build", desc: "Agile sprints with weekly demos, clean code, and continuous integration." },
              { step: "04", title: "Launch & Scale", desc: "Deployment, monitoring, optimization, and ongoing support." },
            ].map((phase) => (
              <div key={phase.step} className="relative flex flex-col gap-3">
                <span className="font-serif text-4xl font-bold text-electric/20">{phase.step}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
              Our Team
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Meet the Experts
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A passionate team of engineers and designers building the future of intelligent
              software.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <Heart className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-electric">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
              Why Choose Us
            </p>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <d.icon className="h-8 w-8 text-electric" />
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-electric text-electric-foreground hover:bg-electric/90"
            >
              <Link href="/contact">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

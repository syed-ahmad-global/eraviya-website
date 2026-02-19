import Link from "next/link"
import { Brain, Code, Smartphone, Workflow, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Solutions Development",
    description:
      "Custom AI, NLP, Computer Vision, and Predictive Analytics tailored to your business needs.",
    href: "/services#ai",
    accent: "bg-electric/10 text-electric",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "React/Next.js frontends paired with robust Node.js and Python backends for scalable applications.",
    href: "/services#fullstack",
    accent: "bg-teal/10 text-teal",
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-Platform",
    description:
      "React Native apps and Progressive Web Apps that deliver seamless experiences across every device.",
    href: "/services#mobile",
    accent: "bg-chart-3/10 text-chart-3",
  },
  {
    icon: Workflow,
    title: "No-Code/Low-Code Automation",
    description:
      "n8n, Make.com, and custom workflow automation to streamline operations and reduce manual effort.",
    href: "/services#automation",
    accent: "bg-chart-4/10 text-chart-4",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-electric">
            What We Do
          </p>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Services That Drive Results
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From AI-powered solutions to full-stack development, we deliver end-to-end technology
            services that transform your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${service.accent}`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-electric transition-all group-hover:gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

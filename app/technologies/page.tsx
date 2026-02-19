"use client"

import { Badge } from "@/components/ui/badge"
import { getTechIcon } from "@/lib/tech-icons"

// Metadata is exported from a separate layout or handled at route level
// since this is now a client component

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Cutting-edge AI tools and frameworks for intelligent solutions.",
    accent: "border-electric/30 bg-electric/5",
    accentDot: "bg-electric",
    items: [
      { name: "OpenAI GPT-4", category: "LLM" },
      { name: "Anthropic Claude", category: "LLM" },
      { name: "Llama / Mistral", category: "Open Source" },
      { name: "LangChain", category: "Framework" },
      { name: "Hugging Face", category: "NLP" },
      { name: "TensorFlow", category: "ML" },
      { name: "PyTorch", category: "ML" },
      { name: "OpenCV", category: "Vision" },
      { name: "scikit-learn", category: "ML" },
      { name: "Pandas / NumPy", category: "Data" },
      { name: "NLTK / spaCy", category: "NLP" },
      { name: "Pinecone", category: "Vector DB" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive interfaces with the best developer experience.",
    accent: "border-teal/30 bg-teal/5",
    accentDot: "bg-teal",
    items: [
      { name: "React", category: "Library" },
      { name: "Next.js", category: "Framework" },
      { name: "Vue.js", category: "Framework" },
      { name: "Angular", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Framer Motion", category: "Animation" },
      { name: "Three.js / R3F", category: "3D" },
      { name: "Recharts / D3.js", category: "Charts" },
      { name: "shadcn/ui", category: "Components" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Robust server-side architectures and data management.",
    accent: "border-chart-3/30 bg-chart-3/5",
    accentDot: "bg-chart-3",
    items: [
      { name: "Node.js", category: "Runtime" },
      { name: "Express", category: "Framework" },
      { name: "Python", category: "Language" },
      { name: "FastAPI", category: "Framework" },
      { name: "Django", category: "Framework" },
      { name: "PostgreSQL", category: "SQL" },
      { name: "MongoDB", category: "NoSQL" },
      { name: "Supabase", category: "BaaS" },
      { name: "Firebase", category: "BaaS" },
      { name: "Redis", category: "Cache" },
      { name: "GraphQL", category: "API" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Vercel", category: "Platform" },
    ],
  },
  {
    title: "Mobile Technologies",
    description: "Cross-platform mobile development for iOS, Android, and beyond.",
    accent: "border-chart-4/30 bg-chart-4/5",
    accentDot: "bg-chart-4",
    items: [
      { name: "React Native", category: "Framework" },
      { name: "Flutter", category: "Framework" },
      { name: "Expo", category: "Tooling" },
      { name: "PWA", category: "Web" },
      { name: "WebRTC", category: "Real-Time" },
      { name: "Push Notifications", category: "Service" },
    ],
  },
  {
    title: "Automation Platforms",
    description: "Workflow tools that eliminate manual effort and scale operations.",
    accent: "border-electric/30 bg-electric/5",
    accentDot: "bg-electric",
    items: [
      { name: "n8n", category: "Platform" },
      { name: "Make.com", category: "Platform" },
      { name: "Zapier", category: "Platform" },
      { name: "GoHighLevel", category: "CRM" },
      { name: "Webhooks", category: "Integration" },
      { name: "REST APIs", category: "Integration" },
    ],
  },
]

export default function TechnologiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              Tech Stack
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              Technologies We Master
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We leverage the latest and most reliable technologies to build solutions that are
              performant, scalable, and future-proof.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-16">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="mb-8 flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${cat.accentDot}`} />
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {cat.items.map((item) => {
                    const Icon = getTechIcon(item.name)
                    return (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between rounded-lg border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${cat.accent}`}
                      >
                        <div className="flex items-center gap-2.5">
                          {Icon && <Icon className="h-5 w-5 shrink-0" />}
                          <span className="font-medium text-foreground">{item.name}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-border text-muted-foreground text-xs"
                        >
                          {item.category}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

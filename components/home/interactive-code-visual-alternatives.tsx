"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Brain, Code2, Cpu, Database, Globe, Zap, Sparkles, Terminal, Smartphone, Cloud, BarChart3, Layers } from "lucide-react"

// ============================================================================
// INTERACTIVE CODE VISUAL - ALTERNATIVE VARIATIONS
// ============================================================================
// To use a variation:
// 1. Copy the export function you want to use
// 2. Replace the export in interactive-code-visual.tsx with it
// ============================================================================

// ============================================================================
// VARIATION 1: Original - Orbiting Code Terminal with 3D perspective
// ============================================================================

const codeSnippets = [
  {
    label: "AI Integration",
    icon: Brain,
    lines: [
      { text: "const model = await loadModel(", color: "text-foreground" },
      { text: '  "eraviya/custom-llm-v3"', color: "text-teal" },
      { text: ");", color: "text-foreground" },
      { text: "", color: "text-foreground" },
      { text: "const response = await model.generate({", color: "text-foreground" },
      { text: '  prompt: userQuery,', color: "text-electric" },
      { text: "  temperature: 0.7,", color: "text-electric" },
      { text: "  maxTokens: 2048", color: "text-electric" },
      { text: "});", color: "text-foreground" },
    ],
  },
  {
    label: "Full Stack API",
    icon: Globe,
    lines: [
      { text: "export async function POST(req) {", color: "text-foreground" },
      { text: "  const data = await req.json();", color: "text-foreground" },
      { text: "", color: "text-foreground" },
      { text: "  const result = await db.insert({", color: "text-foreground" },
      { text: "    table: 'analytics',", color: "text-teal" },
      { text: "    values: processData(data),", color: "text-teal" },
      { text: "  });", color: "text-foreground" },
      { text: "", color: "text-foreground" },
      { text: "  return Response.json(result);", color: "text-electric" },
    ],
  },
  {
    label: "Automation",
    icon: Zap,
    lines: [
      { text: "const workflow = createWorkflow({", color: "text-foreground" },
      { text: '  name: "data-pipeline",', color: "text-teal" },
      { text: "  steps: [", color: "text-foreground" },
      { text: "    extract(source),", color: "text-electric" },
      { text: "    transform(schema),", color: "text-electric" },
      { text: "    enrich(aiModel),", color: "text-electric" },
      { text: "    load(destination)", color: "text-electric" },
      { text: "  ]", color: "text-foreground" },
      { text: "});", color: "text-foreground" },
    ],
  },
]

const orbitIcons = [
  { icon: Brain, label: "AI/ML", delay: 0, left: "100%", top: "50%" },
  { icon: Code2, label: "Dev", delay: 1, left: "75%", top: "93.3%" },
  { icon: Database, label: "Data", delay: 2, left: "25%", top: "93.3%" },
  { icon: Cpu, label: "Infra", delay: 3, left: "0%", top: "50%" },
  { icon: Globe, label: "Web", delay: 4, left: "25%", top: "6.7%" },
  { icon: Zap, label: "Auto", delay: 5, left: "75%", top: "6.7%" },
]

export function InteractiveCodeVisual_Original() {
  const [activeSnippet, setActiveSnippet] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % codeSnippets.length)
      setVisibleLines(0)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setVisibleLines(0)
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setVisibleLines((prev) => {
        const maxLines = codeSnippets[activeSnippet].lines.length
        if (prev >= maxLines) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return prev
        }
        return prev + 1
      })
    }, 120)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [activeSnippet])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  const snippet = codeSnippets[activeSnippet]
  const IconComponent = snippet.icon

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[420px] w-full items-center justify-center lg:h-[480px]"
    >
      <div
        className="absolute h-[340px] w-[340px] rounded-full border border-electric/10 lg:h-[400px] lg:w-[400px]"
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {orbitIcons.map((item) => (
            <div
              key={item.label}
              className="group absolute flex flex-col items-center gap-1"
              style={{
                left: item.left,
                top: item.top,
                transform: "translate(-50%, -50%)",
                animation: `pulse 3s ease-in-out ${item.delay * 0.5}s infinite`,
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/20 bg-card shadow-lg shadow-electric/5 transition-all duration-300 group-hover:scale-110 group-hover:border-electric/50 group-hover:shadow-electric/20">
                <item.icon className="h-5 w-5 text-electric" />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </div>
        ))}
      </div>

      <div
        className="relative z-10 w-[280px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-electric/5 lg:w-[320px]"
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * 4}deg) rotateY(${mousePos.x * -4}deg) translateZ(20px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <IconComponent className="h-3.5 w-3.5 text-electric" />
            <span>{snippet.label}</span>
          </div>
        </div>

        <div className="p-4 font-mono text-xs leading-relaxed lg:text-sm">
          {snippet.lines.map((line, i) => (
            <div
              key={`${activeSnippet}-${i}`}
              className={`flex items-start gap-3 transition-all duration-200 ${
                i < visibleLines ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              <span className="w-4 shrink-0 select-none text-right text-muted-foreground/40">
                {i + 1}
              </span>
              <span className={line.color}>
                {line.text}
                {i === visibleLines - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-electric" />
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="flex border-t border-border">
          {codeSnippets.map((s, i) => (
            <button
              key={s.label}
              onClick={() => {
                setActiveSnippet(i)
                setVisibleLines(0)
              }}
              className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-2 text-[10px] font-medium transition-colors ${
                i === activeSnippet
                  ? "bg-electric/10 text-electric"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <s.icon className="h-3 w-3" />
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-electric/5 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />
    </div>
  )
}


// ============================================================================
// VARIATION 2: CardStack3D - 3D card stack with interactive spread effect
// ============================================================================

export function InteractiveCodeVisual_CardStack3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const cards = [
    { icon: Brain, label: "AI Solutions", gradient: "from-electric/20 to-teal/10", border: "border-electric/20", title: "Custom AI Models", desc: "LLM Integration & Fine-tuning", iconBg: "bg-electric/10", iconColor: "text-electric" },
    { icon: Code2, label: "Full Stack", gradient: "from-teal/20 to-electric/10", border: "border-teal/20", title: "Web Development", desc: "Next.js, React, Node.js", iconBg: "bg-teal/10", iconColor: "text-teal" },
    { icon: Smartphone, label: "Mobile", gradient: "from-electric/15 to-teal/15", border: "border-electric/30", title: "Cross-Platform", desc: "React Native & PWA", iconBg: "bg-electric/10", iconColor: "text-electric" },
    { icon: Zap, label: "Automation", gradient: "from-teal/15 to-electric/15", border: "border-teal/30", title: "No-Code Solutions", desc: "n8n, Make.com & Zapier", iconBg: "bg-teal/10", iconColor: "text-teal" },
    { icon: Cloud, label: "Cloud", gradient: "from-electric/20 to-teal/10", border: "border-electric/20", title: "Infrastructure", desc: "AWS, Docker & CI/CD", iconBg: "bg-electric/10", iconColor: "text-electric" },
    { icon: BarChart3, label: "Analytics", gradient: "from-teal/20 to-electric/10", border: "border-teal/20", title: "Data Insights", desc: "BI & Dashboards", iconBg: "bg-teal/10", iconColor: "text-teal" },
  ]

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative flex h-[480px] w-full items-center justify-center"
    >
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-br from-electric/15 to-teal/15 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <div
        className="relative flex items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
          transition: "transform 0.4s ease-out",
        }}
      >
        {cards.map((card, index) => {
          const IconComponent = card.icon
          const offset = (index - (cards.length - 1) / 2) * (hoveredIndex === null ? 50 : 90)
          const zIndex = index
          const rotate = (index - (cards.length - 1) / 2) * (hoveredIndex === null ? 3 : 10)
          const isHovered = hoveredIndex === index

          return (
            <div
              key={card.label}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`absolute transition-all duration-500 ease-out ${isHovered ? "scale-110" : "hover:scale-105"}`}
              style={{
                transform: `translateX(${offset}px) rotate(${rotate}deg) translateZ(${zIndex * 15}px)`,
                zIndex,
                opacity: hoveredIndex === null ? 1 - Math.abs(index - (cards.length - 1) / 2) * 0.12 : isHovered ? 1 : 0.4,
              }}
            >
              <div className={`h-64 w-56 overflow-hidden rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} shadow-2xl backdrop-blur-md transition-all duration-300 ${isHovered ? "shadow-electric/40 border-electric/60 ring-4 ring-electric/20" : "shadow-lg"}`}>
                <div className="flex h-full flex-col p-6">
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${card.iconBg} shadow-lg transition-all duration-300 ${isHovered ? "scale-110" : ""}`}>
                    <IconComponent className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <div className={`mt-auto flex items-center gap-2 text-xs font-semibold ${card.iconColor}`}>
                    <span>{card.label}</span>
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


// ============================================================================
// VARIATION 3: FloatingTechIcons - Floating icons in 3D space
// ============================================================================

export function InteractiveCodeVisual_FloatingTechIcons() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const techItems = [
    { icon: Brain, label: "AI/ML", color: "text-electric", bg: "bg-electric/10", border: "border-electric/30", x: -120, y: -80, delay: 0 },
    { icon: Code2, label: "React", color: "text-teal", bg: "bg-teal/10", border: "border-teal/30", x: 80, y: -100, delay: 1 },
    { icon: Database, label: "Data", color: "text-electric", bg: "bg-electric/10", border: "border-electric/30", x: -80, y: 60, delay: 2 },
    { icon: Cloud, label: "Cloud", color: "text-teal", bg: "bg-teal/10", border: "border-teal/30", x: 100, y: 80, delay: 3 },
    { icon: Smartphone, label: "Mobile", color: "text-electric", bg: "bg-electric/10", border: "border-electric/30", x: -140, y: 0, delay: 4 },
    { icon: Cpu, label: "Backend", color: "text-teal", bg: "bg-teal/10", border: "border-teal/30", x: 140, y: 0, delay: 5 },
    { icon: Zap, label: "API", color: "text-electric", bg: "bg-electric/10", border: "border-electric/30", x: 0, y: -120, delay: 6 },
    { icon: Terminal, label: "DevOps", color: "text-teal", bg: "bg-teal/10", border: "border-teal/30", x: 0, y: 120, delay: 7 },
  ]

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[480px] w-full items-center justify-center"
    >
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-br from-electric/20 to-teal/20 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
          transition: "transform 0.6s ease-out",
        }}
      />

      <div
        className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border-2 border-electric/40 bg-gradient-to-br from-electric/25 to-teal/25 shadow-2xl shadow-electric/30 backdrop-blur-sm"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/10 to-transparent animate-pulse" />
        <Layers className="relative h-16 w-16 text-electric drop-shadow-lg" />
        <div className="absolute -bottom-10 text-center">
          <p className="text-sm font-bold text-foreground">Tech Stack</p>
          <p className="text-xs text-muted-foreground">Full Circle</p>
        </div>
      </div>

      {techItems.map((item, index) => {
        const IconComponent = item.icon
        const parallaxX = item.x + mousePos.x * 35
        const parallaxY = item.y + mousePos.y * 35

        return (
          <div
            key={item.label}
            className="absolute transition-all duration-500 ease-out"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) translateZ(${60 + index * 12}px)`,
              animation: `float 3s ease-in-out ${item.delay * 0.35}s infinite`,
            }}
          >
            <div className="group flex flex-col items-center gap-2">
              <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl ${item.border} ${item.bg} backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-${item.color}/20`}>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color}/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <IconComponent className={`h-8 w-8 ${item.color} relative z-10`} />
              </div>
              <span className="text-xs font-semibold text-foreground opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </div>
        )
      })}

      <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{ opacity: 0.15 }}>
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
          </linearGradient>
        </defs>
        {techItems.map((item, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${item.x * 0.75}px)`}
            y2={`calc(50% + ${item.y * 0.75}px)`}
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      <div
        className="pointer-events-none absolute h-80 w-80 rounded-full bg-gradient-to-br from-teal/10 to-electric/10 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
    </div>
  )
}


// ============================================================================
// VARIATION 4: ProjectCarousel - 3D carousel showcasing portfolio
// ============================================================================

export function InteractiveCodeVisual_ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    { title: "AI Analytics Platform", category: "AI/ML", icon: Brain, color: "text-electric", bg: "bg-electric/10", border: "border-electric/30" },
    { title: "E-Commerce Platform", category: "Full Stack", icon: Globe, color: "text-teal", bg: "bg-teal/10", border: "border-teal/30" },
    { title: "Health App", category: "Mobile", icon: Smartphone, color: "text-electric", bg: "bg-electric/10", border: "border-electric/30" },
    { title: "Workflow Automation", category: "Automation", icon: Zap, color: "text-teal", bg: "bg-teal/10", border: "border-teal/30" },
    { title: "Real Estate Portal", category: "Web Dev", icon: Code2, color: "text-electric", bg: "bg-electric/10", border: "border-electric/30" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [projects.length])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  const radius = 180
  const angleStep = (2 * Math.PI) / projects.length

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[480px] w-full items-center justify-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-br from-electric/20 to-teal/20 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
          transition: "transform 0.6s ease-out",
        }}
      />

      <div
        className="relative z-20 w-80 rounded-2xl border border-border/50 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl p-7 shadow-2xl transition-all duration-500 ring-1 ring-electric/10"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg)`,
        }}
      >
        <div className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl ${projects[activeIndex].border} ${projects[activeIndex].bg} shadow-lg transition-all duration-500`}>
          {(() => {
            const ActiveIcon = projects[activeIndex].icon
            return <ActiveIcon className={`h-10 w-10 ${projects[activeIndex].color}`} />
          })()}
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{projects[activeIndex].title}</h3>
        <p className={`text-sm font-medium ${projects[activeIndex].color}`}>{projects[activeIndex].category}</p>
        <div className="mt-6 flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-gradient-to-r from-electric to-teal" : "bg-border hover:bg-border/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute"
        style={{
          transform: `perspective(1000px) rotateX(${60 + mousePos.y * 5}deg) rotateZ(${-mousePos.x * 5}deg)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {projects.map((project, i) => {
          const angle = i * angleStep - activeIndex * angleStep
          const x = Math.sin(angle) * radius
          const z = Math.cos(angle) * radius
          const scale = 0.55 + (z + radius) / (radius * 2) * 0.45
          const opacity = 0.25 + (z + radius) / (radius * 2) * 0.75
          const IconComponent = project.icon

          return (
            <div
              key={project.title}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                opacity,
                zIndex: Math.round(z + radius),
              }}
            >
              <div className={`flex h-28 w-28 flex-col items-center justify-center rounded-2xl border ${project.border} ${project.bg} backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl`}>
                <IconComponent className={`h-12 w-12 ${project.color}`} />
                <span className="mt-2 text-xs font-semibold text-foreground">{project.category}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-br from-teal/15 to-electric/15 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 45}px, ${mousePos.y * 45}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
    </div>
  )
}


// ============================================================================
// VARIATION 5: GlitchTerminal - Large terminal with glitch effect
// ============================================================================

export function InteractiveCodeVisual_GlitchTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const glitchCode = [
    { text: "> initializing eraviya_ai_core...", indent: 0 },
    { text: "> loading modules: [", indent: 0 },
    { text: '"llm-integration",', indent: 2 },
    { text: '"full-stack-engine",', indent: 2 },
    { text: '"automation-hub",', indent: 2 },
    { text: "]", indent: 0 },
    { text: "", indent: 0 },
    { text: "> systems online ✓", indent: 0 },
    { text: "> ready to build", indent: 0 },
    { text: "", indent: 0 },
    { text: "_".repeat(30), indent: 0 },
  ]

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const typeCode = () => {
      setVisibleLines(0)
      interval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= glitchCode.length) {
            clearInterval(interval)
            setTimeout(() => {
              setGlitchActive(true)
              setTimeout(() => {
                setGlitchActive(false)
                typeCode()
              }, 200)
            }, 3000)
            return prev
          }
          return prev + 1
        })
      }, 150)
    }

    typeCode()
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[480px] w-full items-center justify-center"
    >
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-200 ${glitchActive ? "animate-pulse" : ""}`}
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="flex items-center justify-between border-b border-border bg-secondary px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-mono text-muted-foreground">eraviya-terminal v2.0</span>
          <div className="flex items-center gap-1">
            <Terminal className="h-4 w-4 text-electric" />
          </div>
        </div>

        <div className="p-6 font-mono text-sm leading-relaxed">
          {glitchCode.map((line, i) => (
            <div
              key={i}
              className={`transition-all duration-200 ${
                i < visibleLines ? "opacity-100" : "opacity-0"
              }`}
              style={{ paddingLeft: `${line.indent * 0.75}rem` }}
            >
              <span className={glitchActive && i === visibleLines - 1 ? "text-electric animate-ping" : "text-foreground"}>
                {line.text}
              </span>
              {i === visibleLines - 1 && !glitchActive && (
                <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-electric" />
              )}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-electric/20 blur-3xl"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>
    </div>
  )
}


// ============================================================================
// VARIATION 6: HolographicProjection - Sci-fi holographic display
// ============================================================================

export function InteractiveCodeVisual_HolographicProjection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scanlinePos, setScanlinePos] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const hologramData = [
    { label: "AI Processing", value: "94%", icon: Brain },
    { label: "Code Quality", value: "98%", icon: Code2 },
    { label: "System Uptime", value: "99.9%", icon: Cpu },
    { label: "Client Satisfaction", value: "100%", icon: Sparkles },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setScanlinePos((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMousePos({ x, y })
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[480px] w-full items-center justify-center"
    >
      <div
        className="relative h-96 w-80"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-64 rounded-full border-2 border-electric/50 shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-pulse" />

        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[120px] border-r-[120px] border-b-[350px] border-l-transparent border-r-transparent border-b-electric/5" />

        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-full overflow-hidden"
          style={{ height: "350px" }}
        >
          <div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric/30 to-transparent"
            style={{ top: `${scanlinePos}%`, transition: "top 0.05s linear" }}
          />
        </div>

        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full px-8 space-y-4">
          {hologramData.map((item, i) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center justify-between border border-electric/30 bg-electric/5 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-electric/10 hover:border-electric/50"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="h-5 w-5 text-electric" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-electric font-mono">{item.value}</span>
              </div>
            )
          })}
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-16 w-64 rounded-full bg-electric/20 blur-2xl" />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-electric animate-pulse"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-electric/10 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
    </div>
  )
}

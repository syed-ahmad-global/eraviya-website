"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Brain, Code2, Cpu, Database, Globe, Zap } from "lucide-react"

// ============================================================================
// INTERACTIVE CODE VISUAL - Current Variation: Original (Orbiting Terminal)
// ============================================================================
// To switch to a different variation:
// 1. See interactive-code-visual-alternatives.tsx for all available options
// 2. Comment/uncomment the export variation you want to use below
// ============================================================================
//
// Available Variations:
// - Original: Orbiting Code Terminal with 3D perspective
// - CardStack3D: 3D card stack with interactive spread
// - FloatingTechIcons: Floating icons in 3D space
// - ProjectCarousel: 3D carousel showcasing portfolio
// - GlitchTerminal: Large terminal with glitched text
// - HolographicProjection: Sci-fi holographic display
//
// Simply comment/uncomment the variation you want to use below.
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

export { InteractiveCodeVisual_Original as InteractiveCodeVisual } from './interactive-code-visual-alternatives'
// export { InteractiveCodeVisual_GlitchTerminal as InteractiveCodeVisual } from './interactive-code-visual-alternatives'
// export { InteractiveCodeVisual_HolographicProjection as InteractiveCodeVisual } from './interactive-code-visual-alternatives'
// export { InteractiveCodeVisual_ProjectCarousel as InteractiveCodeVisual } from './interactive-code-visual-alternatives'
// export { InteractiveCodeVisual_FloatingTechIcons as InteractiveCodeVisual } from './interactive-code-visual-alternatives'
// export { InteractiveCodeVisual_CardStack3D as InteractiveCodeVisual } from './interactive-code-visual-alternatives'




// export function InteractiveCodeVisual() {
//   const [activeSnippet, setActiveSnippet] = useState(0)
//   const [visibleLines, setVisibleLines] = useState(0)
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
//   const containerRef = useRef<HTMLDivElement>(null)
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSnippet((prev) => (prev + 1) % codeSnippets.length)
//       setVisibleLines(0)
//     }, 6000)
//     return () => clearInterval(timer)
//   }, [])

//   useEffect(() => {
//     setVisibleLines(0)
//     if (intervalRef.current) clearInterval(intervalRef.current)

//     intervalRef.current = setInterval(() => {
//       setVisibleLines((prev) => {
//         const maxLines = codeSnippets[activeSnippet].lines.length
//         if (prev >= maxLines) {
//           if (intervalRef.current) clearInterval(intervalRef.current)
//           return prev
//         }
//         return prev + 1
//       })
//     }, 120)

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current)
//     }
//   }, [activeSnippet])

//   const handleMouseMove = useCallback((e: React.MouseEvent) => {
//     if (!containerRef.current) return
//     const rect = containerRef.current.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
//     setMousePos({ x, y })
//   }, [])

//   const snippet = codeSnippets[activeSnippet]
//   const IconComponent = snippet.icon

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative flex h-[420px] w-full items-center justify-center lg:h-[480px]"
//     >
//       <div
//         className="absolute h-[340px] w-[340px] rounded-full border border-electric/10 lg:h-[400px] lg:w-[400px]"
//         style={{
//           transform: `perspective(800px) rotateX(${mousePos.y * 8}deg) rotateY(${mousePos.x * 8}deg)`,
//           transition: "transform 0.3s ease-out",
//         }}
//       >
//         {orbitIcons.map((item) => (
//           <div
//             key={item.label}
//             className="group absolute flex flex-col items-center gap-1"
//             style={{
//               left: item.left,
//               top: item.top,
//               transform: "translate(-50%, -50%)",
//               animation: `pulse 3s ease-in-out ${item.delay * 0.5}s infinite`,
//             }}
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/20 bg-card shadow-lg shadow-electric/5 transition-all duration-300 group-hover:scale-110 group-hover:border-electric/50 group-hover:shadow-electric/20">
//               <item.icon className="h-5 w-5 text-electric" />
//             </div>
//             <span className="text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
//               {item.label}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div
//         className="relative z-10 w-[280px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-electric/5 lg:w-[320px]"
//         style={{
//           transform: `perspective(800px) rotateX(${mousePos.y * 4}deg) rotateY(${mousePos.x * -4}deg) translateZ(20px)`,
//           transition: "transform 0.3s ease-out",
//         }}
//       >
//         <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2.5">
//           <div className="flex items-center gap-1.5">
//             <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
//             <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
//             <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
//           </div>
//           <div className="flex items-center gap-2 text-xs text-muted-foreground">
//             <IconComponent className="h-3.5 w-3.5 text-electric" />
//             <span>{snippet.label}</span>
//           </div>
//         </div>

//         <div className="p-4 font-mono text-xs leading-relaxed lg:text-sm">
//           {snippet.lines.map((line, i) => (
//             <div
//               key={`${activeSnippet}-${i}`}
//               className={`flex items-start gap-3 transition-all duration-200 ${i < visibleLines ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
//                 }`}
//             >
//               <span className="w-4 shrink-0 select-none text-right text-muted-foreground/40">
//                 {i + 1}
//               </span>
//               <span className={line.color}>
//                 {line.text}
//                 {i === visibleLines - 1 && (
//                   <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-electric" />
//                 )}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="flex border-t border-border">
//           {codeSnippets.map((s, i) => (
//             <button
//               key={s.label}
//               onClick={() => {
//                 setActiveSnippet(i)
//                 setVisibleLines(0)
//               }}
//               className={`flex flex-1 items-center justify-center gap-1.5 px-2 py-2 text-[10px] font-medium transition-colors ${i === activeSnippet
//                 ? "bg-electric/10 text-electric"
//                 : "text-muted-foreground hover:bg-secondary hover:text-foreground"
//                 }`}
//             >
//               <s.icon className="h-3 w-3" />
//               <span className="hidden sm:inline">{s.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div
//         className="pointer-events-none absolute h-64 w-64 rounded-full bg-electric/5 blur-3xl"
//         style={{
//           transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
//           transition: "transform 0.4s ease-out",
//         }}
//       />
//     </div>
//   )
// }

"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

// ============================================================================
// PARTICLE FIELD - Current Variation: Original (Connected Particles)
// ============================================================================
// To switch to a different variation:
// 1. See particle-field-alternatives.tsx for all available options
// 2. Copy the export function you want to use
// 3. Replace the ParticleField function below with it
// ============================================================================

// export { ParticleField_Original as ParticleField } from './particle-field-alternatives'
// export { ParticleField_NeuralNetwork as ParticleField } from './particle-field-alternatives'
// export { ParticleField_DataFlow as ParticleField } from './particle-field-alternatives'
// export { ParticleField_GeometricShapes as ParticleField } from './particle-field-alternatives'
// export { ParticleField_MatrixRain as ParticleField } from './particle-field-alternatives'
export { ParticleField_WaveInterference as ParticleField } from './particle-field-alternatives'



// export function ParticleField() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const animationRef = useRef<number>(0)
//   const particlesRef = useRef<Particle[]>([])
//   const mouseRef = useRef({ x: -1000, y: -1000 })

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
//     if (prefersReducedMotion) return

//     const resize = () => {
//       const rect = canvas.parentElement?.getBoundingClientRect()
//       if (!rect) return
//       canvas.width = rect.width
//       canvas.height = rect.height

//       const count = Math.min(Math.floor((rect.width * rect.height) / 12000), 80)
//       if (particlesRef.current.length === 0) {
//         const particles: Particle[] = []
//         for (let i = 0; i < count; i++) {
//           particles.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             vx: (Math.random() - 0.5) * 0.4,
//             vy: (Math.random() - 0.5) * 0.4,
//             size: Math.random() * 2 + 1,
//             opacity: Math.random() * 0.4 + 0.1,
//           })
//         }
//         particlesRef.current = particles
//       }
//     }

//     resize()
//     window.addEventListener("resize", resize)

//     const handleMouse = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect()
//       mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
//     }
//     canvas.addEventListener("mousemove", handleMouse)

//     const animate = () => {
//       if (!ctx || !canvas) return
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       const particles = particlesRef.current
//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i]
//         p.x += p.vx
//         p.y += p.vy

//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1

//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
//         ctx.fill()

//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j]
//           const dx = p.x - p2.x
//           const dy = p.y - p2.y
//           const dist = Math.sqrt(dx * dx + dy * dy)
//           if (dist < 150) {
//             ctx.beginPath()
//             ctx.moveTo(p.x, p.y)
//             ctx.lineTo(p2.x, p2.y)
//             ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 150)})`
//             ctx.lineWidth = 1
//             ctx.stroke()
//           }
//         }

//         const mx = mouseRef.current.x - p.x
//         const my = mouseRef.current.y - p.y
//         const md = Math.sqrt(mx * mx + my * my)
//         if (md < 200) {
//           ctx.beginPath()
//           ctx.moveTo(p.x, p.y)
//           ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
//           ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - md / 200)})`
//           ctx.lineWidth = 1
//           ctx.stroke()
//         }
//       }

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animate()

//     return () => {
//       cancelAnimationFrame(animationRef.current)
//       window.removeEventListener("resize", resize)
//       canvas.removeEventListener("mousemove", handleMouse)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 h-full w-full"
//       aria-hidden="true"
//     />
//   )
// }

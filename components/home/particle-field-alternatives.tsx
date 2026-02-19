"use client"

import { useEffect, useRef } from "react"

// ============================================================================
// PARTICLE FIELD - ALTERNATIVE VARIATIONS
// ============================================================================
// To use a variation:
// 1. Copy the export function you want to use
// 2. Replace the export in particle-field.tsx with it
// ============================================================================

// ============================================================================
// VARIATION 1: Original - Connected Particles with Mouse Interaction
// ============================================================================

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function ParticleField_Original() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height

      const count = Math.min(Math.floor((rect.width * rect.height) / 12000), 80)
      if (particlesRef.current.length === 0) {
        const particles: Particle[] = []
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.4 + 0.1,
          })
        }
        particlesRef.current = particles
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener("mousemove", handleMouse)

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        const mx = mouseRef.current.x - p.x
        const my = mouseRef.current.y - p.y
        const md = Math.sqrt(mx * mx + my * my)
        if (md < 200) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - md / 200)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}


// ============================================================================
// VARIATION 2: NeuralNetwork - Pulsing nodes with connections
// ============================================================================

export function ParticleField_NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    interface Node {
      x: number; y: number; vx: number; vy: number;
      pulse: number; pulseSpeed: number;
    }

    let nodes: Node[] = []

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height

      const count = Math.min(Math.floor((rect.width * rect.height) / 15000), 50)
      nodes = []
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        })
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener("mousemove", handleMouse)

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy
        node.pulse += node.pulseSpeed

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const pulseSize = 3 + Math.sin(node.pulse) * 1.5
        const alpha = 0.3 + Math.sin(node.pulse) * 0.2

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 3)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha + 0.3})`
        ctx.fill()

        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j]
          const dx = node.x - node2.x
          const dy = node.y - node2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(node2.x, node2.y)
            const connectionAlpha = 0.15 * (1 - dist / 180) * (0.5 + Math.sin(node.pulse) * 0.3)
            ctx.strokeStyle = `rgba(6, 182, 212, ${connectionAlpha})`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        }

        const mx = mouseRef.current.x - node.x
        const my = mouseRef.current.y - node.y
        const md = Math.sqrt(mx * mx + my * my)
        if (md < 250) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - md / 250)})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}


// ============================================================================
// VARIATION 3: DataFlow - Streams of particles flowing
// ============================================================================

export function ParticleField_DataFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    interface DataParticle {
      x: number; y: number; speed: number; size: number; opacity: number;
      angle: number;
    }

    let particles: DataParticle[] = []
    const directions = [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4, Math.PI, -3 * Math.PI / 4, -Math.PI / 2, -Math.PI / 4]

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const createParticle = (): DataParticle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 1.5,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
      angle: directions[Math.floor(Math.random() * directions.length)],
    })

    resize()
    particles = Array.from({ length: 100 }, createParticle)
    window.addEventListener("resize", resize)

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let p of particles) {
        p.x += Math.cos(p.angle) * p.speed
        p.y += Math.sin(p.angle) * p.speed

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x - Math.cos(p.angle) * p.speed * 8, p.y - Math.sin(p.angle) * p.speed * 8)
        const gradient = ctx.createLinearGradient(
          p.x, p.y,
          p.x - Math.cos(p.angle) * p.speed * 8, p.y - Math.sin(p.angle) * p.speed * 8
        )
        gradient.addColorStop(0, `rgba(59, 130, 246, ${p.opacity})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        ctx.strokeStyle = gradient
        ctx.lineWidth = p.size
        ctx.lineCap = "round"
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}


// ============================================================================
// VARIATION 4: GeometricShapes - Floating rotating shapes
// ============================================================================

export function ParticleField_GeometricShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    interface Shape {
      x: number; y: number; vx: number; vy: number;
      size: number; rotation: number; rotationSpeed: number;
      sides: number; opacity: number;
    }

    let shapes: Shape[] = []

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height

      shapes = []
      const count = Math.min(Math.floor((rect.width * rect.height) / 25000), 15)
      for (let i = 0; i < count; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 15 + Math.random() * 35,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          sides: [3, 4, 5, 6][Math.floor(Math.random() * 4)],
          opacity: 0.05 + Math.random() * 0.15,
        })
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const drawPolygon = (x: number, y: number, size: number, sides: number, rotation: number) => {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = rotation + (i * 2 * Math.PI) / sides
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let shape of shapes) {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        drawPolygon(shape.x, shape.y, shape.size, shape.sides, shape.rotation)
        ctx.fillStyle = `rgba(59, 130, 246, ${shape.opacity})`
        ctx.fill()

        drawPolygon(shape.x, shape.y, shape.size, shape.sides, shape.rotation)
        ctx.strokeStyle = `rgba(6, 182, 212, ${shape.opacity * 2})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}


// ============================================================================
// VARIATION 5: MatrixRain - Classic falling characters
// ============================================================================

export function ParticleField_MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()"
    let drops: number[] = []
    const fontSize = 14

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height

      const columns = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -100)
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        const brightness = Math.random()
        ctx.fillStyle = brightness > 0.9
          ? "rgba(255, 255, 255, 0.9)"
          : brightness > 0.7
          ? "rgba(6, 182, 212, 0.8)"
          : "rgba(59, 130, 246, 0.5)"

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}


// ============================================================================
// VARIATION 6: WaveInterference - Multiple wave patterns
// ============================================================================

export function ParticleField_WaveInterference() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      if (!ctx || !canvas) return
      timeRef.current += 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let x = 0; x < canvas.width; x += 1) {
        for (let y = 0; y < canvas.height; y += 1) {
          const index = (y * canvas.width + x) * 4

          const wave1 = Math.sin((x * 0.01) + timeRef.current) * Math.cos((y * 0.01) + timeRef.current * 0.7)
          const wave2 = Math.sin((x * 0.015) - timeRef.current * 1.2) * Math.sin((y * 0.008) + timeRef.current)
          const wave3 = Math.cos((x * 0.008) + timeRef.current * 0.5) * Math.sin((y * 0.012) - timeRef.current * 0.8)

          const combined = (wave1 + wave2 + wave3) / 3

          const r = Math.floor(59 + combined * 40)
          const g = Math.floor(130 + combined * 80)
          const b = Math.floor(246 + combined * 9)
          const a = Math.floor(Math.abs(combined) * 120)

          data[index] = r
          data[index + 1] = g
          data[index + 2] = b
          data[index + 3] = a
        }
      }

      ctx.putImageData(imageData, 0, 0)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

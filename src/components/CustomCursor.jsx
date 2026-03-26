import { useEffect, useRef, useCallback } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Particle trail cursor — replaces the original dot + ring cursor.
//
// How it works:
//   • A small sharp dot follows the mouse exactly (no lag)
//   • Each mousemove spawns a particle that fades out + drifts upward
//   • Everything is drawn on a full-screen canvas — zero DOM spam
//   • On clickable elements the dot grows and particles burst in a star
//   • On touch devices the whole component does nothing (no cursor on mobile)
//
// Tweak the CONFIG block below to adjust feel without touching the logic.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  // Dot (the sharp cursor tip)
  dotRadius: 5,
  dotColor: "#ffffff",
  dotColorHover: "#7c3aed",   // purple when over a link/button

  // Trail particles
  particleCount: 2,           // how many particles per mousemove event
  particleBaseRadius: 3,      // starting size of each particle
  particleLife: 38,           // frames a particle lives (higher = longer trail)
  particleSpeed: 0.6,         // upward drift speed
  particleSpread: 4,          // horizontal scatter radius

  // Particle color palette — cycles through these
  colors: [
    "#7c3aed",   // violet
    "#a855f7",   // purple
    "#06b6d4",   // cyan
    "#3b82f6",   // blue
    "#8b5cf6",   // indigo
  ],

  // Click burst
  burstCount: 14,             // particles on click
  burstSpeed: 3.5,            // how fast they fly out
}

// Detect touch-only device — no cursor to show
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches

function CustomCursor() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -200, y: -200 })
  const isPointer = useRef(false)
  const particles = useRef([])
  const rafRef = useRef(null)
  const colorIndex = useRef(0)
  const frameCount = useRef(0)

  const nextColor = useCallback(() => {
    const c = CONFIG.colors[colorIndex.current % CONFIG.colors.length]
    colorIndex.current++
    return c
  }, [])

  const spawnParticle = useCallback((x, y, vx = 0, vy = 0, burst = false) => {
    particles.current.push({
      x,
      y,
      vx: burst ? vx : (Math.random() - 0.5) * CONFIG.particleSpread + vx,
      vy: burst ? vy : -Math.random() * CONFIG.particleSpeed - 0.3,
      life: CONFIG.particleLife,
      maxLife: CONFIG.particleLife,
      radius: burst
        ? CONFIG.particleBaseRadius * (0.6 + Math.random())
        : CONFIG.particleBaseRadius * (0.5 + Math.random() * 0.8),
      color: nextColor(),
    })
  }, [nextColor])

  useEffect(() => {
    if (isTouchDevice()) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // ── Resize canvas to fill viewport ──────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // ── Track mouse ─────────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      const target = e.target
      isPointer.current = Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea")
      )

      // Spawn trail particles on every move
      for (let i = 0; i < CONFIG.particleCount; i++) {
        spawnParticle(e.clientX, e.clientY)
      }
    }

    // ── Click burst ─────────────────────────────────────────────────────────
    const onClick = (e) => {
      for (let i = 0; i < CONFIG.burstCount; i++) {
        const angle = (i / CONFIG.burstCount) * Math.PI * 2
        const speed = CONFIG.burstSpeed * (0.5 + Math.random())
        spawnParticle(
          e.clientX,
          e.clientY,
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
          true
        )
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("click", onClick)

    // ── Animation loop ───────────────────────────────────────────────────────
    const draw = () => {
      frameCount.current++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update + draw particles
      particles.current = particles.current.filter((p) => p.life > 0)
      for (const p of particles.current) {
        const progress = p.life / p.maxLife       // 1 → 0 as it ages
        const alpha = progress * 0.9
        const radius = p.radius * progress

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(radius, 0.1), 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        p.vy -= 0.03   // gentle upward acceleration (gravity reversed)
        p.vx *= 0.97   // slight horizontal damping
        p.life--
      }

      // Draw sharp cursor dot
      ctx.globalAlpha = 1
      const dotColor = isPointer.current ? CONFIG.dotColorHover : CONFIG.dotColor
      const dotR = isPointer.current ? CONFIG.dotRadius * 1.6 : CONFIG.dotRadius

      // Outer glow ring
      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, dotR + 8, 0, Math.PI * 2)
      ctx.strokeStyle = dotColor
      ctx.globalAlpha = 0.25
      ctx.lineWidth = 1
      ctx.stroke()

      // Inner dot
      ctx.beginPath()
      ctx.arc(mouse.current.x, mouse.current.y, dotR, 0, Math.PI * 2)
      ctx.fillStyle = dotColor
      ctx.globalAlpha = 1
      ctx.fill()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("click", onClick)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [spawnParticle])

  if (isTouchDevice()) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}

export default CustomCursor

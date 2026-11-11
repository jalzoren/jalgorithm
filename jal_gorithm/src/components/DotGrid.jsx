import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/gsap.js'

/**
 * Full-bleed dot grid background — static on reduced motion,
 * animated proximity highlight on full motion.
 */
function DotGrid({ className = 'dot-grid' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reduce = prefersReducedMotion()
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let pointer = { x: -9999, y: -9999 }

    const GAP = 28
    const R = 1.4
    const PROXIMITY = 100

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = Math.max(1, rect.width)
      h = Math.max(1, rect.height)
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const cols = Math.ceil(w / GAP) + 1
      const rows = Math.ceil(h / GAP) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GAP
          const y = r * GAP
          const dist = Math.hypot(x - pointer.x, y - pointer.y)
          const factor = reduce ? 0 : Math.max(0, 1 - dist / PROXIMITY)
          const radius = R + factor * 2.2
          ctx.fillStyle = factor > 0.05
            ? 'rgba(0, 0, 0, 0.65)'
            : 'rgba(13,13,26,0.09)'
          ctx.globalAlpha = 0.6 + factor * 0.4
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    const tick = () => {
      raf = requestAnimationFrame(tick)
      draw()
    }

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    if (!reduce) {
      window.addEventListener('pointermove', onMove, { passive: true })
      raf = requestAnimationFrame(tick)
    } else {
      draw()
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  )
}

export default DotGrid

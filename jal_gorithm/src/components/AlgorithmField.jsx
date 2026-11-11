import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/gsap.js'

const PALETTE = {
  light: {
    line: 'rgba(0, 168, 187, 0.3)',
    node: 'rgba(13, 13, 26, 0.5)',
    signal: 'rgba(0, 229, 255, 0.7)',
    soft: 'rgba(0, 229, 255, 0.12)',
  },
  dark: {
    line: 'rgba(0, 229, 255, 0.22)',
    node: 'rgba(200, 200, 216, 0.5)',
    signal: 'rgba(0, 229, 255, 0.85)',
    soft: 'rgba(0, 229, 255, 0.1)',
  },
}

function AlgorithmField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reduce = prefersReducedMotion()
    let width = 0
    let height = 0
    let dpr = 1
    let nodes = []
    let raf = 0
    let last = 0
    let visible = true
    let colors = PALETTE[document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light']
    const pointer = { x: -9999, y: -9999, active: false }

    const buildNodes = () => {
      const count = Math.max(14, Math.min(34, Math.round((width * height) / 24000)))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: index % 7 === 0 ? 3.2 : 1.6 + Math.random() * 1.4,
        signal: index % 7 === 0,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildNodes()
      if (reduce) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)
          if (distance < 160) {
            const alpha = 1 - distance / 160
            ctx.globalAlpha = alpha * 0.55
            ctx.strokeStyle = colors.line
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      for (const node of nodes) {
        ctx.fillStyle = node.signal ? colors.signal : colors.node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fill()

        if (node.signal) {
          ctx.strokeStyle = colors.soft
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r + 7, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    const tick = (time) => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      if (!last) last = time
      const delta = Math.min(32, time - last) / 16.667
      last = time

      for (const node of nodes) {
        node.x += node.vx * delta
        node.y += node.vy * delta

        if (node.x < -20) node.x = width + 20
        if (node.x > width + 20) node.x = -20
        if (node.y < -20) node.y = height + 20
        if (node.y > height + 20) node.y = -20

        if (pointer.active) {
          const dx = node.x - pointer.x
          const dy = node.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < 150 && distance > 0.01) {
            const force = (1 - distance / 150) * 0.5
            node.x += (dx / distance) * force
            node.y += (dy / distance) * force
          }
        }
      }

      draw()
    }

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    const onPointerLeave = () => {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        last = 0
      },
      { rootMargin: '160px' },
    )
    visibilityObserver.observe(canvas)

    const themeObserver = new MutationObserver(() => {
      colors = PALETTE[document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light']
      if (reduce) draw()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    resize()

    if (!reduce) raf = requestAnimationFrame(tick)
    else draw()

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      themeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="algorithm-field" aria-hidden="true" />
}

export default AlgorithmField

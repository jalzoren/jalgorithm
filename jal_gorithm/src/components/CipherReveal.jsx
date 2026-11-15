import { useEffect, useLayoutEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/gsap.js'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\{}[]#$%&*+=_'
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

/**
 * CipherReveal — a headline that decodes out of scrambled characters.
 * Every character keeps its final width while scrambling, so the layout
 * never shifts. Resolves left to right; reduced motion shows the final text.
 */
function CipherReveal({
  text,
  as: Tag = 'span',
  className,
  accent,
  play = true,
  delay = 0,
  duration = 1.4,
  scrambleSpeed = 55,
  id,
}) {
  const rootRef = useRef(null)
  const charRefs = useRef([])

  const words = text.split(/(\s+)/)
  let charIndex = 0

  /* Lock each glyph to its final width before any scrambling happens. */
  useLayoutEffect(() => {
    const nodes = charRefs.current.filter(Boolean)
    nodes.forEach((node) => {
      node.style.width = ''
      node.dataset.final = node.dataset.final || node.textContent
    })
    const widths = nodes.map((node) => node.getBoundingClientRect().width)
    nodes.forEach((node, i) => {
      node.style.width = `${widths[i]}px`
    })
    if (document.fonts?.ready) {
      let cancelled = false
      document.fonts.ready.then(() => {
        if (cancelled) return
        nodes.forEach((node) => {
          node.style.width = ''
        })
        const fresh = nodes.map((node) => node.getBoundingClientRect().width)
        nodes.forEach((node, i) => {
          node.style.width = `${fresh[i]}px`
        })
      })
      return () => {
        cancelled = true
      }
    }
    return undefined
  }, [text])

  useEffect(() => {
    const nodes = charRefs.current.filter(Boolean)
    const reduce = prefersReducedMotion()

    nodes.forEach((node) => {
      node.classList.remove('is-cipher')
      node.textContent = node.dataset.final
    })
    if (reduce) return undefined

    if (!play) {
      nodes.forEach((node) => {
        node.style.visibility = 'hidden'
      })
      return undefined
    }

    const count = nodes.length
    const spread = Math.max(0.2, duration - 0.5) * 1000
    const resolveAt = nodes.map(
      (_, i) => delay * 1000 + (i / Math.max(1, count - 1)) * spread + 380 + Math.random() * 120,
    )
    const lastTick = new Array(count).fill(0)
    const start = performance.now()
    let raf = 0

    nodes.forEach((node) => {
      node.style.visibility = 'visible'
      node.classList.add('is-cipher')
      node.textContent = randomGlyph()
    })

    const frame = (now) => {
      const elapsed = now - start
      let pending = 0
      nodes.forEach((node, i) => {
        if (node.dataset.done) return
        if (elapsed >= resolveAt[i]) {
          node.textContent = node.dataset.final
          node.classList.remove('is-cipher')
          node.dataset.done = '1'
        } else {
          pending += 1
          if (now - lastTick[i] > scrambleSpeed) {
            node.textContent = randomGlyph()
            lastTick[i] = now
          }
        }
      })
      if (pending) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      nodes.forEach((node) => {
        delete node.dataset.done
        node.classList.remove('is-cipher')
        node.style.visibility = ''
        node.textContent = node.dataset.final
      })
    }
  }, [play, delay, duration, scrambleSpeed, text])

  return (
    <Tag ref={rootRef} id={id} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wi) => {
          if (/^\s+$/.test(word)) return <span key={`s-${wi}`}>{word}</span>
          const isAccent = accent && word === accent
          return (
            <span key={`${word}-${wi}`} className={isAccent ? 'cipher-word is-accent' : 'cipher-word'}>
              {Array.from(word).map((ch, ci) => {
                const slot = charIndex++
                return (
                  <span
                    key={ci}
                    ref={(el) => {
                      charRefs.current[slot] = el
                    }}
                    className="cipher-char"
                  >
                    {ch}
                  </span>
                )
              })}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}

export default CipherReveal

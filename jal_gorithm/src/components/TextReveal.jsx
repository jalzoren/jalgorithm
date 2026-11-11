import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'

function TextReveal({
  text,
  as: Tag = 'span',
  className,
  split = 'word',
  accent,
  play,
  scroll = false,
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  start = 'top 84%',
  id,
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const element = ref.current
    if (!element) return undefined

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.tr-item', element)
      gsap.set(items, { yPercent: 118, opacity: 0, rotate: 3 })

      if (play === false) return

      const animation = {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration,
        delay,
        stagger,
        ease: 'power4.out',
      }

      if (scroll) {
        gsap.to(items, {
          ...animation,
          scrollTrigger: { trigger: element, start, once: true },
        })
      } else {
        gsap.to(items, animation)
      }
    }, ref)

    return () => ctx.revert()
  }, [delay, duration, play, scroll, stagger, start, text])

  const tokens = split === 'char' ? Array.from(text) : text.split(/(\s+)/)

  return (
    <Tag ref={ref} id={id} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tokens.map((token, index) => {
          if (/^\s+$/.test(token)) {
            return <span key={`space-${index}`}>{token}</span>
          }
          const isAccent = accent && token === accent
          return (
            <span className="tr-mask" key={`${token}-${index}`}>
              <span className={isAccent ? 'tr-item is-accent' : 'tr-item'}>
                {token}
              </span>
            </span>
          )
        })}
      </span>
    </Tag>
  )
}

export default TextReveal

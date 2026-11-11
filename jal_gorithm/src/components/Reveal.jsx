import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion, ScrollTrigger } from '../lib/gsap.js'

function Reveal({
  as: Tag = 'div',
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.85,
  stagger = 0,
  start = 'top 84%',
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const element = ref.current
    if (!element) return undefined

    const ctx = gsap.context(() => {
      const targets = stagger ? element.children : element
      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        delay,
        stagger: typeof stagger === 'number' ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
      })
    }, ref)

    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [delay, duration, stagger, start, y])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal

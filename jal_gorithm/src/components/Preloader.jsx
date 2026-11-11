import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import Logo from './Logo.jsx'
import { profile } from '../content.js'

const SQUARES = 16

function Preloader({ onDone }) {
  const overlayRef = useRef(null)
  const pctRef = useRef(null)
  const barRef = useRef(null)
  const doneRef = useRef(onDone)

  useEffect(() => { doneRef.current = onDone }, [onDone])

  useEffect(() => {
    if (prefersReducedMotion()) doneRef.current?.()
  }, [])

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined

    const overlay = overlayRef.current
    const pct = pctRef.current
    const squares = barRef.current
      ? Array.from(barRef.current.querySelectorAll('i'))
      : []

    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          document.body.style.overflow = ''
          doneRef.current?.()
        },
      })

      tl.fromTo('.preloader-brand', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.65 }, 0)
      tl.fromTo('.preloader-meta', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.16)
      tl.to(counter, {
        value: 100,
        duration: 1.1,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (pct) pct.textContent = `${String(Math.round(counter.value)).padStart(2, '0')}%`
          const active = Math.round((counter.value / 100) * squares.length)
          squares.forEach((sq, i) => sq.classList.toggle('is-on', i < active))
        },
      }, 0)
      tl.to('.preloader-center', { y: -16, opacity: 0, duration: 0.38, ease: 'power2.in' }, 1.26)
      tl.to('.preloader-brand, .preloader-meta', { y: -16, opacity: 0, duration: 0.38, ease: 'power2.in' }, 1.26)
      tl.to(overlay, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, 1.38)
      tl.set(overlay, { display: 'none' })
    }, overlayRef)

    return () => { document.body.style.overflow = ''; ctx.revert() }
  }, [])

  if (prefersReducedMotion()) return null

  return (
    <div ref={overlayRef} className="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="preloader-top">
        <div className="preloader-brand">
          <Logo size={32} wordmark />
        </div>
        <span className="preloader-label mono">loading</span>
      </div>

      <div className="preloader-center">
        <div ref={pctRef} className="preloader-pct">00%</div>
        <div ref={barRef} className="preloader-bar" aria-hidden="true">
          {Array.from({ length: SQUARES }, (_, i) => <i key={i} />)}
        </div>
      </div>

      <div className="preloader-meta mono">
        <span>{profile.location}</span>
        <span>designing interfaces that move</span>
        <span>{profile.coordinates}</span>
      </div>
    </div>
  )
}

export default Preloader

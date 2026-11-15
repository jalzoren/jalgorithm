import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import Dither from './Dither.jsx'
import DraggableStickers from './DraggableStickers.jsx'
import FlipCard from './FlipCard.jsx'
import CounterBadge from './CounterBadge.jsx'
import CipherReveal from './CipherReveal.jsx'
import { marqueeItems, profile } from '../content.js'
import { ArrowDownIcon, ArrowUpRightIcon } from './icons.jsx'

function Hero({ ready }) {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    if (!ready || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.7 },
      })

      /* breadcrumb row */
      tl.fromTo('.hero-breadcrumb', { y: 12, opacity: 0 }, { y: 0, opacity: 1 }, 0)

      /* hero name — handled by TextReveal internally, just ensure it fires after mount */
      /* thesis + role */
      tl.fromTo('.hero-thesis', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.55)
      tl.fromTo('.hero-role',   { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5  }, 0.68)

      /* CTA row */
      tl.fromTo(
        '.hero-actions > *',
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
        0.75,
      )

      /* flip card */
      tl.fromTo(
        '.flip-card',
        { y: 40, opacity: 0, rotate: 1 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.95, ease: 'power3.out' },
        0.3,
      )

      /* counter badge */
      tl.fromTo(
        '.counter-badge',
        { scale: 0.75, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)' },
        0.5,
      )

      /* marquee */
      tl.fromTo('.hero-marquee', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.9)

      /* scroll hint */
      tl.fromTo('.hero-scroll', { y: -6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, 1.1)
    }, heroRef)

    return () => ctx.revert()
  }, [ready])

  return (
    <section id="home" ref={heroRef} className="hero" aria-labelledby="hero-title">
      <div className="hero-dither" aria-hidden="true">
        <Dither
          waveColor="#b8b8b8"
          backgroundColor="#ffffff"
          ditherMode="bayer"
          colorNum={3}
          pixelSize={3}
          waveSpeed={0.03}
          waveFrequency={2.6}
          waveAmplitude={0.32}
          brightness={-0.08}
          mouseEffect="erase"
          mouseRadius={0.28}
          trail={0.6}
        />
      </div>
      <DraggableStickers stickers={[
        { id: 'home-build', shape: 'burst', position: 'top-right', label: 'BUILD N CREATE', mark: '++' },
      ]} />

      {/* breadcrumb + counter */}
      <div className="hero-breadcrumb">
        <p className="eyebrow hero-eyebrow">
          <span className="mono">PORTFOLIO</span>
          <span className="eyebrow-sep" aria-hidden="true">/</span>
          <span className="mono">FRONT-END</span>
          <span className="eyebrow-sep" aria-hidden="true">/</span>
          <span className="mono">UI/UX</span>
        </p>
        <CounterBadge />
      </div>

      {/* two-column layout */}
      <div className="hero-inner">
        <div className="hero-copy">
          <CipherReveal
            as="h1"
            id="hero-title"
            className="hero-name"
            text="Frontend developer. UI/UX, and fiddly-bits."
            accent="fiddly-bits."
            play={ready}
            duration={1.5}
            delay={0.1}
          />

          <p className="hero-thesis">{profile.tagline}</p>

          <p className="hero-role mono">{profile.roleLine}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects" data-cursor-label="Projects">
              View projects
              <ArrowUpRightIcon size={14} />
            </a>
            <a className="btn btn-ghost" href="#contact" data-cursor-label="Contact">
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* single flip card */}
        <div className="hero-side">
          <FlipCard />
        </div>
      </div>

      {/* marquee */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={`${item}-${i}`}>
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import DraggableStickers from './DraggableStickers.jsx'
import { experience, profile } from '../content.js'

function Experience() {
  const timelineRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-line span',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 78%',
            end: 'bottom 58%',
            scrub: true,
          },
        },
      )
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <DraggableStickers stickers={[
        { id: 'experience-learning', shape: 'burst', position: 'top-right', label: 'LEARN BY DOING', mark: '↗' },
      ]} />
      <div className="shell">
        <SectionHeading
          index="04"
          id="experience-title"
          text="Practice, not just theory."
          accent="practice,"
        />

        <div className="experience-grid">
          <div className="experience-intro">
            <Reveal as="p" className="experience-quote" y={22}>
              I learn by building. Every role here added a layer: shipping,
              teaching, and working fast under pressure.
            </Reveal>
            <Reveal className="experience-status" y={16} delay={0.1}>
              <span className="status-dot" aria-hidden="true" />
              <span className="mono">{profile.status}</span>
            </Reveal>
            <Reveal className="experience-meta" y={16} delay={0.15}>
              <div>
                <span className="mono">Base</span>
                <span>{profile.location}</span>
              </div>
              <div>
                <span className="mono">Timezone</span>
                <span>GMT+8 · {profile.timezone}</span>
              </div>
            </Reveal>
          </div>

          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line" aria-hidden="true">
              <span />
            </div>
            <Reveal className="timeline-items" stagger={0.12} y={26}>
              {experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-period mono">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="timeline-org mono">{item.org}</p>
                  <p className="timeline-blurb">{item.blurb}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

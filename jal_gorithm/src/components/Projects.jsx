import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { plates } from './ProjectPlates.jsx'
import { projects } from '../content.js'
import { ArrowUpRightIcon } from './icons.jsx'

function ProjectCard({ project, index }) {
  const Plate = plates[project.plate] ?? plates.grid
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-plate-wrap">
        <div className="project-plate">
          <Plate />
        </div>
        <div className="project-plate-meta">
          <span className="mono project-index">{String(index + 1).padStart(2, '0')}</span>
          {project.featured && (
            <span className="project-badge mono">★ Featured</span>
          )}
        </div>
      </div>

      <div className="project-body">
        <div className="project-header">
          <div>
            <div className="project-title-line">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-subtitle mono">{project.subtitle}</span>
            </div>
            <p className="project-blurb">{project.blurb}</p>
          </div>
          <div className="project-meta-col">
            <span className="project-year mono">{project.year}</span>
            <span className="project-status mono">{project.status}</span>
          </div>
        </div>

        <ul className="project-tags tag-list">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>

        <a className="project-link-btn btn-text" href={project.link}>
          View case study
          <ArrowUpRightIcon size={15} />
        </a>
      </div>
    </article>
  )
}

function Projects() {
  const pinRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1000px)', () => {
      const pin = pinRef.current
      const track = trackRef.current
      if (!pin || !track) return

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.to('.projects-progress-line span', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          id="projects-title"
          text="Selected work, built to ship."
          accent="ship."
          lede="Template projects that show the range: data-heavy interfaces, motion studies, and tools people actually use."
        />
      </div>

      <div className="projects-pin" ref={pinRef}>
        <div className="projects-track" ref={trackRef}>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}

          <div className="project-card project-end">
            <div className="project-end-inner">
              <span className="mono">// Next</span>
              <h3>Have a project in mind?</h3>
              <p>
                I am open to internships, freelance builds, and collaborations
                on interfaces that need to move well.
              </p>
              <a className="btn btn-primary" href="#contact">
                Let&apos;s talk
                <ArrowUpRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="projects-progress" aria-hidden="true">
          <span className="mono">// scroll</span>
          <div className="projects-progress-line">
            <span />
          </div>
          <span className="mono">{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}

export default Projects

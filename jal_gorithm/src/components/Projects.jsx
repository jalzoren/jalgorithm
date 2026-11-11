import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap.js'
import SectionHeading from './SectionHeading.jsx'
import DraggableStickers from './DraggableStickers.jsx'
import { projects } from '../content.js'
import { ArrowUpRightIcon, CloseIcon } from './icons.jsx'

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-plate-wrap">
        <div className="project-plate" role="img" aria-label="Project image placeholder" />
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
            <span className="project-category mono">{project.category}</span>
            <span className="project-status mono">{project.status}</span>
          </div>
        </div>

        <ul className="project-tags tag-list">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>

        <button
          className="project-link-btn btn-text"
          type="button"
          aria-label={`More information about ${project.title}`}
          onClick={() => onOpen(project)}
        >
          More information
          <ArrowUpRightIcon size={15} />
        </button>
      </div>
    </article>
  )
}

function Projects() {
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  const dialogRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = projects.length + 1

  const goToSlide = (index) => {
    const pin = pinRef.current
    const track = trackRef.current
    const slide = track?.children[index]
    if (!pin || !track || !slide) return

    const left = pin.scrollLeft + slide.getBoundingClientRect().left - pin.getBoundingClientRect().left
    pin.scrollTo({ left, behavior: 'auto' })
    setActiveSlide(index)
  }

  useEffect(() => {
    const pin = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return

    const updateActiveSlide = () => {
      const pinLeft = pin.getBoundingClientRect().left
      let closestIndex = 0
      let closestDistance = Infinity

      Array.from(track.children).forEach((slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - pinLeft)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveSlide((current) => current === closestIndex ? current : closestIndex)
    }

    pin.addEventListener('scroll', updateActiveSlide, { passive: true })
    return () => pin.removeEventListener('scroll', updateActiveSlide)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedProject && !dialog.open) dialog.showModal()
    if (!selectedProject && dialog.open) dialog.close()
  }, [selectedProject])

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1000px)', () => {
      const pin = pinRef.current
      const track = trackRef.current
      if (!pin || !track) return

      const distance = () =>
        Math.ceil(Math.max(0, track.scrollWidth - pin.clientWidth))
      const topOffset = () =>
        Math.min(64, Math.max(32, window.innerHeight * 0.06))
      const scrollRange = () => `+=${distance()}`

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          pin,
          pinSpacing: true,
          start: () => `top top+=${topOffset()}`,
          end: scrollRange,
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
          start: () => `top top+=${topOffset()}`,
          end: scrollRange,
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
      <DraggableStickers stickers={[
        { id: 'projects-selected', shape: 'ticket', position: 'top-right', label: 'SELECTED WORK', mark: '↗' },
        { id: 'projects-made', shape: 'seal', position: 'bottom-left', label: 'UNI and SIDE PROJECTS', mark: '★' },
      ]} />
      <div className="shell">
        <SectionHeading
          index="03"
          id="projects-title"
          text=" Uni Projects and Side Projects."
          accent="Projects."
          lede="A mix of uni work I pushed further than the brief, side projects I made for fun, and a couple of tools that people actually use.

"
        />
      </div>

      <div className="projects-pin" ref={pinRef}>
        <div className="projects-track" id="projects-track" ref={trackRef}>
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.title}
              onOpen={setSelectedProject}
            />
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

      <div className="projects-mobile-nav" role="group" aria-label="Project navigation">
        <button
          className="projects-nav-btn"
          type="button"
          aria-label="Previous project"
          aria-controls="projects-track"
          disabled={activeSlide === 0}
          onClick={() => goToSlide(activeSlide - 1)}
        >
          <span aria-hidden="true">←</span>
          Previous
        </button>
        <span className="projects-mobile-count mono" aria-live="polite">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
        </span>
        <button
          className="projects-nav-btn"
          type="button"
          aria-label="Next project"
          aria-controls="projects-track"
          disabled={activeSlide === slideCount - 1}
          onClick={() => goToSlide(activeSlide + 1)}
        >
          Next
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {selectedProject && (
          <div className="project-dialog-content">
            <div className="project-dialog-topline">
              <span className="mono">// project brief</span>
              <button
                className="icon-button"
                type="button"
                aria-label="Close project information"
                onClick={() => dialogRef.current?.close()}
              >
                <CloseIcon size={16} />
              </button>
            </div>
            <p className="project-dialog-category mono">
              {selectedProject.subtitle}
            </p>
            <h3 id="project-dialog-title">{selectedProject.title}</h3>
            <p id="project-dialog-description">
              {selectedProject.description}
            </p>
            <ul className="project-tags tag-list">
              {selectedProject.tags.map((tag) => (
                <li className="tag" key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary"
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
              <ArrowUpRightIcon size={16} />
            </a>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default Projects

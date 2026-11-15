import { useEffect, useRef, useState } from 'react'
import { profile, school, schoolShs, certifications, socials } from '../content.js'
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon } from './icons.jsx'

const quickLinks = socials.filter((item) => item.icon === 'github' || item.icon === 'linkedin')

const formatTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: profile.timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())

/**
 * FlipCard — single card in the hero with two faces:
 *   Front: Portfolio access card (name, role, status)
 *   Back:  Education (college + SHS) and certifications
 *
 * Flip is triggered by clicking the card or pressing Enter/Space.
 */
function FlipCard() {
  const [flipped, setFlipped] = useState(false)
  const [time, setTime] = useState(formatTime)
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef(0)

  /* live local time, so the card says something that is true right now */
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime()), 1000)
    return () => window.clearInterval(id)
  }, [])
  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const stop = (e) => e.stopPropagation()
  const copyEmail = async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const toggle = () => setFlipped((f) => !f)
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() }
  }

  return (
    <div
      className={flipped ? 'flip-card is-flipped' : 'flip-card'}
      onClick={toggle}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      data-cursor-label="Flip"
      aria-label={flipped ? 'Show access card (click to flip back)' : 'Show education (click to flip)'}
      aria-pressed={flipped}
    >
      <div className="flip-card-inner">

        {/* ── FRONT: Access card ── */}
        <div className="flip-card-face flip-front" aria-hidden={flipped}>
          <div className="flip-front-top">
            <span className="site-wordmark flip-card-wordmark">&gt;_jalgorithm</span>
            <span className="mono flip-label">PORTFOLIO ACCESS CARD</span>
            <span className="mono flip-no">NO. JAL–2026–00001</span>
          </div>

          <div className="flip-front-body">
            <figure className="flip-avatar">
              <img src="/jal.jpg" alt="" />
              <figcaption className="flip-clock mono" title={`Local time in ${profile.location}`}>
                <span className="flip-clock-time">{time}</span>
                <span className="flip-clock-zone">PHT</span>
              </figcaption>
            </figure>

            <div className="flip-fields">
              <div className="flip-field">
                <span className="mono">ISSUED TO</span>
                <strong>
                  (&gt;_jalgorithm){' '}
                  <span className="flip-hidden-name">{profile.fullName}</span>
                </strong>
              </div>
              <div className="flip-field">
                <span className="mono">ROLE</span>
                <span>{profile.role}</span>
              </div>
              <div className="flip-field">
                <span className="mono">SCHOOL</span>
                <span>{school.degree} · {school.shortName}</span>
              </div>
              <div className="flip-field">
                <span className="mono">STATUS</span>
                <span>
                  <span className="status-dot" aria-hidden="true" />
                  {profile.availability}
                </span>
              </div>
              <ul className="flip-focus" aria-label="Focus areas">
                {['Frontend', 'UI/UX', 'Backend'].map((item) => (
                  <li key={item} className="mono">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flip-actions" onClick={stop} onKeyDown={stop}>
            {quickLinks.map((link) => {
              const Icon = link.icon === 'github' ? GithubIcon : LinkedinIcon
              return (
                <a
                  key={link.label}
                  className="flip-action"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={flipped ? -1 : 0}
                >
                  <Icon size={13} />
                  {link.label}
                </a>
              )
            })}
            <button
              type="button"
              className="flip-action"
              onClick={copyEmail}
              tabIndex={flipped ? -1 : 0}
              aria-label={copied ? 'Email copied' : `Copy email address ${profile.email}`}
            >
              {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
            </button>
          </div>
          {/* Barcode footer */}
          <div className="flip-front-foot">
            <div className="flip-barcode" aria-hidden="true">
              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  className="barcode-bar"
                  style={{ height: `${8 + Math.sin(i * 1.4) * 6}px` }}
                />
              ))}
            </div>
            <span className="mono">{profile.coordinates} · GMT+8</span>
            <span className="mono flip-hint">click to flip →</span>
          </div>
        </div>

        {/* ── BACK: Education card ── */}
        <div className="flip-card-face flip-back" aria-hidden={!flipped}>
          <div className="flip-back-top">
            <div className="terminal-dots" aria-hidden="true">
              <i className="dot-red" /><i className="dot-yellow" /><i className="dot-green" />
            </div>
            <span className="mono" style={{ flex: 1, textAlign: 'center', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Education
            </span>
            <span className="mono flip-live">// Academic</span>
          </div>

          <div className="flip-edu-body">
            <section className="flip-edu-block" aria-label="Education">
              <div className="flip-edu-entry">
                <div className="flip-edu-line">
                  <strong className="flip-edu-name">{school.name}</strong>
                  <span className="flip-edu-period mono">{school.period}</span>
                </div>
                <div className="flip-edu-line">
                  <span className="flip-edu-degree mono">{school.degree} · {school.yearLabel}</span>
                  <div className="flip-edu-progress" role="progressbar" aria-valuenow={Math.round(school.progress * 100)} aria-valuemin="0" aria-valuemax="100" aria-label="Degree progress">
                    <div className="flip-edu-progress-track">
                      <div className="flip-edu-progress-fill" style={{ width: `${school.progress * 100}%` }} />
                    </div>
                    <span className="mono flip-edu-pct">{Math.round(school.progress * 100)}%</span>
                  </div>
                </div>
              </div>
              <div className="flip-edu-entry">
                <div className="flip-edu-line">
                  <strong className="flip-edu-name">{schoolShs.name}</strong>
                  <span className="flip-edu-period mono">{schoolShs.period}</span>
                </div>
                <div className="flip-edu-line">
                  <span className="flip-edu-degree mono">{schoolShs.strand}</span>
                  <span className="flip-edu-status mono">{schoolShs.status}</span>
                </div>
              </div>
            </section>

            <section className="flip-cert-block" aria-label="Certifications">
              <div className="flip-cert-head mono">
                <span>Certifications</span>
                <span>{certifications.length}</span>
              </div>
              <ul
                className="flip-cert-list"
                tabIndex={flipped ? 0 : -1}
                aria-label="Certifications, scrollable"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                {certifications.map((c) => (
                  <li key={c.name} className="flip-cert">
                    <span className="flip-cert-name">{c.name}</span>
                    <span className="flip-cert-meta mono">{c.issuer} · {c.issued}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="flip-back-foot">
            <span className="mono">
              <span className="status-dot" aria-hidden="true" />
              available for work
            </span>
            <span className="mono flip-hint">← click to flip back</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FlipCard

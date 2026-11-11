import { useState } from 'react'
import { profile, school, schoolShs } from '../content.js'

/**
 * FlipCard — single card in the hero with two faces:
 *   Front: Portfolio access card (name, role, status)
 *   Back:  Education card (college + SHS)
 *
 * Flip is triggered by clicking the card or pressing Enter/Space.
 */
function FlipCard() {
  const [flipped, setFlipped] = useState(false)

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
            <div className="flip-avatar" aria-hidden="true">
              <img src="/jal.jpg" alt="" />
            </div>

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
                <span className="mono">FOCUS</span>
                <span>Frontend · UI/UX · Backend</span>
              </div>
              <div className="flip-field">
                <span className="mono">STATUS</span>
                <span>
                  <span className="status-dot" aria-hidden="true" />
                  {profile.availability}
                </span>
              </div>
            </div>
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
            {/* College */}
            <div className="flip-edu-entry flip-edu-college">
              <div className="flip-edu-row">
                <span className="site-wordmark flip-card-edu-wordmark">&gt;_jalgorithm</span>
                <div className="flip-edu-meta">
                  <span className="flip-edu-period mono">{school.yearLabel} · {school.expected.replace('Expected graduation ', '')}</span>
                  <span className="flip-edu-label mono">College</span>
                </div>
              </div>
              <strong className="flip-edu-name">{school.name}</strong>
              <span className="flip-edu-degree mono">{school.degree}</span>

              {/* Progress bar */}
              <div className="flip-edu-progress" role="progressbar" aria-valuenow={Math.round(school.progress * 100)} aria-valuemin="0" aria-valuemax="100" aria-label="Degree progress">
                <div className="flip-edu-progress-track">
                  <div
                    className="flip-edu-progress-fill"
                    style={{ width: `${school.progress * 100}%` }}
                  />
                </div>
                <span className="mono flip-edu-pct">{Math.round(school.progress * 100)}%</span>
              </div>

              <ul className="flip-edu-courses">
                {school.coursework.slice(0, 4).map((c) => (
                  <li key={c} className="mono">› {c}</li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="flip-edu-divider" aria-hidden="true" />

            {/* SHS */}
            <div className="flip-edu-entry flip-edu-shs">
              <div className="flip-edu-row">
                <div className="flip-edu-badge mono" aria-hidden="true">SHS</div>
                <div className="flip-edu-meta">
                  <span className="flip-edu-period mono">{schoolShs.period}</span>
                  <span className="flip-edu-label mono">{schoolShs.strand}</span>
                </div>
              </div>
              <strong className="flip-edu-name">{schoolShs.name}</strong>
              <span className="flip-edu-status mono">{schoolShs.status}</span>
            </div>
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

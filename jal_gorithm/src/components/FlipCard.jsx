import { useState } from 'react'
import { profile, heroCode } from '../content.js'
import Logo from './Logo.jsx'

/**
 * FlipCard — single card in the hero with two faces:
 *   Front: Portfolio access card (name, role, status)
 *   Back:  Terminal / code view (profile object typed out)
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
      aria-label={flipped ? 'Show access card (click to flip back)' : 'Show code view (click to flip)'}
      aria-pressed={flipped}
    >
      <div className="flip-card-inner">

        {/* ── FRONT: Access card ── */}
        <div className="flip-card-face flip-front" aria-hidden={flipped}>
          <div className="flip-front-top">
            <Logo size={22} />
            <span className="mono flip-label">PORTFOLIO ACCESS CARD</span>
            <span className="mono flip-no">NO. JAL–2026–00001</span>
          </div>

          <div className="flip-front-body">
            {/* Avatar placeholder */}
            <div className="flip-avatar" aria-hidden="true">
              <svg viewBox="0 0 72 72" fill="none">
                <rect width="72" height="72" fill="var(--surface-2)" rx="4" />
                {/* head */}
                <circle cx="36" cy="26" r="13" fill="var(--border)" />
                {/* eyes */}
                <circle cx="31" cy="24" r="2" fill="var(--accent)" />
                <circle cx="41" cy="24" r="2" fill="var(--accent)" />
                {/* shoulders */}
                <path d="M12 60 Q12 48 36 48 Q60 48 60 60" fill="var(--border)" />
              </svg>
              <p className="mono">PHOTOGRAPH<br />OF DEVELOPER</p>
            </div>

            <div className="flip-fields">
              <div className="flip-field">
                <span className="mono">ISSUED TO</span>
                <strong>Jalgorithm</strong>
              </div>
              <div className="flip-field">
                <span className="mono">ROLE</span>
                <span>Front-end Engineer</span>
              </div>
              <div className="flip-field">
                <span className="mono">SCHOOL</span>
                <span>PLP, Pasig City</span>
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

        {/* ── BACK: Terminal ── */}
        <div className="flip-card-face flip-back" aria-hidden={!flipped}>
          <div className="flip-back-top">
            <div className="terminal-dots" aria-hidden="true">
              <i className="dot-red" /><i className="dot-yellow" /><i className="dot-green" />
            </div>
            <span className="mono">jalgorithm.js</span>
            <span className="mono flip-live">● LIVE</span>
          </div>

          <pre className="flip-back-code" aria-label="Profile code object">
            <code>
              {heroCode.map((line, i) => (
                <span className="terminal-line" key={i}>
                  <span className="terminal-line-num mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="terminal-line-text">{line.text}</span>
                </span>
              ))}
            </code>
          </pre>

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

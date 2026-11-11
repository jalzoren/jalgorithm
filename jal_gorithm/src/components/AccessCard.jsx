import { useEffect, useRef, useState } from 'react'
import { profile } from '../content.js'

function AccessCard() {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glint, setGlint] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setTilt({ x: y * -6, y: x * 6 })
      setGlint({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    const onLeave = () => { setTilt({ x: 0, y: 0 }); setGlint({ x: 50, y: 50 }) }

    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <div
      ref={cardRef}
      className="access-card"
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        '--glint-x': `${glint.x}%`,
        '--glint-y': `${glint.y}%`,
      }}
      role="img"
      aria-label="Portfolio access card"
    >
      <div className="access-card-glint" aria-hidden="true" />

      <div className="access-card-header">
        <span className="mono">PORTFOLIO ACCESS CARD</span>
        <span className="mono access-card-no">NO. JAL–2026–00001</span>
      </div>

      <div className="access-card-body">
        {/* Avatar placeholder */}
        <div className="access-card-photo" aria-hidden="true">
          <div className="access-card-avatar">
            <svg viewBox="0 0 80 80" aria-hidden="true">
              <rect width="80" height="80" fill="var(--surface-2)" />
              <circle cx="40" cy="30" r="16" fill="var(--border)" />
              <circle cx="40" cy="30" r="8" fill="var(--muted)" opacity="0.5" />
              <rect x="12" y="54" width="56" height="26" rx="2" fill="var(--border)" />
              {/* Cyan eye dots */}
              <circle cx="34" cy="27" r="2.5" fill="var(--accent)" />
              <circle cx="46" cy="27" r="2.5" fill="var(--accent)" />
            </svg>
          </div>
          <span className="access-card-photo-label mono">PHOTOGRAPH<br />OF DEVELOPER</span>
        </div>

        <div className="access-card-info">
          <div className="access-card-field">
            <span className="mono">ISSUED TO</span>
            <strong>Jalgorithm</strong>
          </div>
          <div className="access-card-field">
            <span className="mono">ROLE</span>
            <span>Front-end Engineer</span>
          </div>
          <div className="access-card-field">
            <span className="mono">CLEARANCE</span>
            <span>UI / UX / Motion</span>
          </div>
          <div className="access-card-field">
            <span className="mono">STATUS</span>
            <span>
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </span>
          </div>
        </div>
      </div>

      <div className="access-card-footer">
        <div className="access-card-barcode" aria-hidden="true">
          {Array.from({ length: 32 }, (_, i) => (
            <span key={i} className="barcode-bar" style={{ height: `${10 + Math.sin(i * 1.3) * 7}px` }} />
          ))}
        </div>
        <span className="mono">PLP · {profile.coordinates}</span>
      </div>
    </div>
  )
}

export default AccessCard

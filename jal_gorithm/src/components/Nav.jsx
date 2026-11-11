import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import MusicPlayer from './MusicPlayer.jsx'
import { navLinks, profile } from '../content.js'
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
} from './icons.jsx'

/* ── Nav ──────────────────────────────────────────────────── */
function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [musicOpen, setMusicOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* active section tracking */
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id) },
      { rootMargin: '-40% 0px -52% 0px' },
    )
    for (const s of sections) obs.observe(s)
    return () => obs.disconnect()
  }, [])

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* body scroll lock for menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen && !musicOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setMusicOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, musicOpen])

  return (
    <header className={['nav', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
      <div className="nav-inner">
        {/* Wordmark */}
        <a className="brand" href="#home" aria-label="JALGORITHM — back to home">
          <span className="brand-word site-wordmark">&gt;_jalgorithm</span>
        </a>

        {/* Desktop links */}
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link, index) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={['nav-link', isActive && 'is-active'].filter(Boolean).join(' ')}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="nav-link-index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="nav-link-label">{link.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <button
            type="button"
            className={musicOpen ? 'icon-button is-accent' : 'icon-button'}
            aria-label={musicOpen ? 'Close music player' : 'Open music player'}
            aria-expanded={musicOpen}
            aria-controls="nav-music-player"
            onClick={() => setMusicOpen((open) => !open)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </button>
          <a className="btn btn-primary nav-cta" href="#contact">
            Let&apos;s talk
            <ArrowUpRightIcon size={13} />
          </a>
          <button
            type="button"
            className="icon-button nav-menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open)
              setMusicOpen(false)
            }}
          >
            {menuOpen ? <CloseIcon size={15} /> : <MenuIcon size={15} />}
          </button>
        </div>
      </div>

      <MusicPlayer isOpen={musicOpen} onClose={() => setMusicOpen(false)} />

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              className="icon-button nav-overlay-close"
              aria-label="Close mobile navigation"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon size={15} />
            </button>
            <nav className="nav-overlay-links" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 12, opacity: 0 }}
                  transition={{ delay: 0.04 + index * 0.045, duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="nav-overlay-index mono">{String(index + 1).padStart(2, '0')}</span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="nav-overlay-foot"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.26, duration: 0.32 }}
            >
              <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>
                Let&apos;s talk <ArrowUpRightIcon size={13} />
              </a>
              <p className="mono">{profile.email}<br />{profile.coordinates}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Nav

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo.jsx'
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
    if (!menuOpen) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={['nav', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
      <div className="nav-inner">
        {/* Logo */}
        <a className="brand" href="#home" aria-label="JALGORITHM — back to home">
          <Logo size={28} />
          <span className="brand-word">JALGORITHM</span>
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
          <a className="btn btn-primary nav-cta" href="#contact">
            Let&apos;s talk
            <ArrowUpRightIcon size={13} />
          </a>
          <button
            type="button"
            className="icon-button nav-menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon size={15} /> : <MenuIcon size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
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

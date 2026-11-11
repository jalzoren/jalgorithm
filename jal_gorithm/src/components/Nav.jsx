import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo.jsx'
import { navLinks, profile } from '../content.js'
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  TerminalIcon,
  PaletteIcon,
} from './icons.jsx'

/* ── Theme toggle ─────────────────────────────────────────── */
function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="icon-button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="icon-swap"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {theme === 'dark' ? <SunIcon size={15} /> : <MoonIcon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

/* ── Style switcher (default / cli) ───────────────────────── */
function StyleToggle({ style, onToggle }) {
  const isCli = style === 'cli'
  return (
    <button
      type="button"
      className={isCli ? 'icon-button is-accent' : 'icon-button'}
      onClick={onToggle}
      aria-label={isCli ? 'Switch to default style' : 'Switch to CLI style'}
      aria-pressed={isCli}
      title={isCli ? 'CLI mode — click for default' : 'Click for CLI / terminal mode'}
    >
      {isCli ? <PaletteIcon size={15} /> : <TerminalIcon size={15} />}
    </button>
  )
}

/* ── Nav ──────────────────────────────────────────────────── */
function Nav() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )
  const [style, setStyle] = useState(() => {
    try { return localStorage.getItem('jal-style') || 'default' } catch { return 'default' }
  })
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* sync theme attr */
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  /* sync style attr — adds/removes data-style="cli" on <html>
     CLI mode no longer locks the theme — both dark and light work */
  useEffect(() => {
    if (style === 'cli') {
      document.documentElement.dataset.style = 'cli'
    } else {
      delete document.documentElement.dataset.style
    }
    /* always sync the current theme, CLI or not */
    document.documentElement.dataset.theme = theme
  }, [style, theme])

  const toggleTheme = () => {
    setTheme((c) => {
      const next = c === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem('jal-theme', next) } catch { /* noop */ }
      return next
    })
  }

  const toggleStyle = () => {
    setStyle((c) => {
      const next = c === 'cli' ? 'default' : 'cli'
      try { localStorage.setItem('jal-style', next) } catch { /* noop */ }
      return next
    })
  }

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
        <a className="brand" href="#top" aria-label="JALGORITHM — back to top">
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
          <StyleToggle style={style} onToggle={toggleStyle} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
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

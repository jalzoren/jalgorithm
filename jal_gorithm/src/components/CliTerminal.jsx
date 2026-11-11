import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { profile, about, skillGroups, projects, experience, school } from '../content.js'
import { CloseIcon, TerminalIcon } from './icons.jsx'

/* ── Command registry ───────────────────────────────────────────────────────
   Each command returns either a string or an array of line objects.
   Line object: { text, type }
   type: 'output' | 'accent' | 'muted' | 'error' | 'link' | 'section'
   ─────────────────────────────────────────────────────────────────────────── */

const COMMANDS = {
  help: {
    desc: 'List available commands',
    run: () => [
      { text: '┌─ available commands ─────────────────────────────────┐', type: 'accent' },
      { text: '│  help          show this menu', type: 'output' },
      { text: '│  whoami        tldr on jalgorithm', type: 'output' },
      { text: '│  about         who I am', type: 'output' },
      { text: '│  skills        my tech stack', type: 'output' },
      { text: '│  projects      selected work', type: 'output' },
      { text: '│  experience    work history', type: 'output' },
      { text: '│  school        education', type: 'output' },
      { text: '│  contact       get in touch', type: 'output' },
      { text: '│  status        availability', type: 'output' },
      { text: '│  stack         quick stack summary', type: 'output' },
      { text: '│  github        open GitHub', type: 'output' },
      { text: '│  linkedin      open LinkedIn', type: 'output' },
      { text: '│  email         copy email', type: 'output' },
      { text: '│  clear         clear the terminal', type: 'output' },
      { text: '└──────────────────────────────────────────────────────┘', type: 'accent' },
    ],
  },

  whoami: {
    desc: 'TL;DR on jalgorithm',
    run: () => [
      { text: `> ${profile.fullName}`, type: 'accent' },
      { text: `  ${profile.role}`, type: 'output' },
      { text: `  ${profile.tagline.slice(0, 90)}...`, type: 'output' },
      { text: `📍 ${profile.location}  ·  ${profile.coordinates}`, type: 'muted' },
      { text: `✉  ${profile.email}`, type: 'muted' },
      { text: `⌥  github.com/jalzoren`, type: 'muted' },
    ],
  },

  about: {
    desc: 'Who I am',
    run: () => [
      { text: '// about', type: 'accent' },
      ...about.paragraphs.map((p) => ({ text: p, type: 'output' })),
      { text: '', type: 'output' },
      { text: '// principles', type: 'accent' },
      ...about.principles.map((p, i) => ({
        text: `  ${String(i + 1).padStart(2, '0')}  ${p.title} — ${p.text}`,
        type: 'output',
      })),
    ],
  },

  skills: {
    desc: 'My tech stack',
    run: () => {
      const lines = [{ text: '// tech stack', type: 'accent' }]
      for (const group of skillGroups) {
        lines.push({ text: `\n  ${group.label}  (${group.note})`, type: 'section' })
        for (const item of group.items) {
          lines.push({ text: `    › ${item.name.padEnd(28)} ${item.note}`, type: 'output' })
        }
      }
      return lines
    },
  },

  stack: {
    desc: 'Quick stack summary',
    run: () => [
      { text: '// quick stack', type: 'accent' },
      { text: '  React · Next.js · TypeScript · JavaScript', type: 'output' },
      { text: '  Python · Node.js · Express · PHP', type: 'output' },
      { text: '  MySQL · PostgreSQL · Supabase', type: 'output' },
      { text: '  Tailwind CSS · Figma · Electron.js', type: 'output' },
      { text: '  Git / GitHub · REST APIs', type: 'output' },
    ],
  },

  projects: {
    desc: 'Selected work',
    run: () => {
      const lines = [{ text: '// selected projects', type: 'accent' }]
      for (const p of projects) {
        lines.push({ text: `\n  ${p.title}  ·  ${p.subtitle}  [${p.year}]`, type: 'section' })
        lines.push({ text: `    ${p.blurb}`, type: 'output' })
        lines.push({ text: `    tags: ${p.tags.join(', ')}`, type: 'muted' })
      }
      return lines
    },
  },

  experience: {
    desc: 'Work history',
    run: () => {
      const lines = [{ text: '// experience', type: 'accent' }]
      for (const e of experience) {
        lines.push({ text: `\n  ${e.period}  —  ${e.role}`, type: 'section' })
        lines.push({ text: `    ${e.org}`, type: 'muted' })
        lines.push({ text: `    ${e.blurb}`, type: 'output' })
      }
      return lines
    },
  },

  school: {
    desc: 'Education',
    run: () => [
      { text: '// education', type: 'accent' },
      { text: `  ${school.name}`, type: 'section' },
      { text: `  ${school.degree}  ·  ${school.yearLabel}`, type: 'output' },
      { text: `  ${school.expected}`, type: 'muted' },
      { text: `  Progress: ${Math.round(school.progress * 100)}%  —  ${school.progressLabel}`, type: 'output' },
      { text: '\n  Coursework:', type: 'muted' },
      ...school.coursework.map((c) => ({ text: `    › ${c}`, type: 'output' })),
    ],
  },

  contact: {
    desc: 'Get in touch',
    run: () => [
      { text: '// contact', type: 'accent' },
      { text: `  email:       ${profile.email}`, type: 'output' },
      { text: `  phone:       ${profile.phone}`, type: 'output' },
      { text: `  linkedin:    linkedin.com/in/laurence-james-flavier`, type: 'output' },
      { text: `  github:      github.com/jalzoren`, type: 'output' },
      { text: `  location:    ${profile.location}`, type: 'output' },
      { text: `  timezone:    ${profile.timezone}`, type: 'output' },
      { text: `  coordinates: ${profile.coordinates}`, type: 'muted' },
      { text: '\n  type `email` to copy email address', type: 'muted' },
      { text: '  type `github` to open GitHub', type: 'muted' },
      { text: '  type `linkedin` to open LinkedIn', type: 'muted' },
    ],
  },

  status: {
    desc: 'Availability',
    run: () => [
      { text: '// current status', type: 'accent' },
      { text: `  ● ${profile.status}`, type: 'output' },
      { text: `  ${profile.availability}`, type: 'output' },
      { text: `  Reach out at: ${profile.email}`, type: 'muted' },
      { text: `  or:           ${profile.phone}`, type: 'muted' },
    ],
  },

  github: {
    desc: 'Open GitHub',
    run: () => {
      window.open('https://github.com/jalzoren', '_blank', 'noopener')
      return [{ text: 'Opening github.com/jalzoren...', type: 'muted' }]
    },
  },

  linkedin: {
    desc: 'Open LinkedIn',
    run: () => {
      window.open('https://www.linkedin.com/in/laurence-james-flavier', '_blank', 'noopener')
      return [{ text: 'Opening LinkedIn profile...', type: 'muted' }]
    },
  },

  email: {
    desc: 'Copy email',
    run: () => {
      try {
        navigator.clipboard.writeText(profile.email)
        return [
          { text: `✓ Copied ${profile.email} to clipboard`, type: 'accent' },
        ]
      } catch {
        return [
          { text: `email: ${profile.email}`, type: 'output' },
          { text: '(copy failed — clipboard not available)', type: 'muted' },
        ]
      }
    },
  },

  clear: {
    desc: 'Clear terminal',
    run: () => '__CLEAR__',
  },
}

const BOOT_LINES = [
  { text: 'JALGORITHM OS v2.0.0  ·  type `help` for commands', type: 'accent' },
  { text: `booting...  ${profile.location}  ·  ${profile.coordinates}`, type: 'muted' },
  { text: '', type: 'output' },
]

/* ── Typewriter for a single string ──────────────────────── */
function Typewriter({ text, speed = 18, onDone }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const tick = () => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
        setTimeout(tick, speed)
      } else {
        onDone?.()
      }
    }
    tick()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return <span>{displayed}</span>
}

/* ── Single output line ───────────────────────────────────── */
function OutputLine({ line, animate }) {
  if (line.text === '') return <div className="cli-line-blank" />
  const cls = `cli-line cli-line-${line.type ?? 'output'}`
  if (!animate) return <div className={cls}>{line.text}</div>
  return (
    <div className={cls}>
      <Typewriter text={line.text} speed={12} />
    </div>
  )
}

/* ── Main terminal ────────────────────────────────────────── */
function CliTerminal() {
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState(BOOT_LINES)
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)
  const [animatingLast, setAnimatingLast] = useState(false)

  /* focus input when opened */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [open])

  /* scroll to bottom whenever history grows */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const runCommand = useCallback((raw) => {
    const trimmed = raw.trim().toLowerCase()
    if (!trimmed) return

    /* echo the command the user typed */
    const echoLine = { text: `> ${raw.trim()}`, type: 'echo' }

    if (!(trimmed in COMMANDS)) {
      setHistory((h) => [
        ...h,
        echoLine,
        { text: `command not found: ${trimmed}  —  type 'help' for commands`, type: 'error' },
      ])
      return
    }

    const result = COMMANDS[trimmed].run()

    if (result === '__CLEAR__') {
      setHistory(BOOT_LINES)
      return
    }

    const lines = Array.isArray(result) ? result : [{ text: result, type: 'output' }]
    setAnimatingLast(true)
    setHistory((h) => [...h, echoLine, ...lines])
    setTimeout(() => setAnimatingLast(false), lines.length * 60 + 400)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    runCommand(input)
    setCmdHistory((h) => [input.trim(), ...h].filter(Boolean).slice(0, 50))
    setHistIdx(-1)
    setInput('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : (cmdHistory[next] ?? ''))
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      /* auto-complete */
      const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(input.toLowerCase()))
      if (matches.length === 1) setInput(matches[0])
      else if (matches.length > 1) {
        setHistory((h) => [
          ...h,
          { text: `> ${input}`, type: 'echo' },
          { text: matches.join('  '), type: 'muted' },
        ])
      }
    }
  }

  /* quick-launch commands from outside */
  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.command) {
        setOpen(true)
        setTimeout(() => runCommand(e.detail.command), 120)
      }
    }
    window.addEventListener('cli:run', handler)
    return () => window.removeEventListener('cli:run', handler)
  }, [runCommand])

  return (
    <>
      {/* FAB — floating toggle button */}
      <motion.button
        type="button"
        className="cli-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close terminal' : 'Open CLI terminal'}
        aria-expanded={open}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        title="Open terminal  (try: help, about, skills...)"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            className="icon-swap"
            initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.6, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <CloseIcon size={18} /> : <TerminalIcon size={18} />}
          </motion.span>
        </AnimatePresence>
        {!open && <span className="cli-fab-label">terminal</span>}
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="cli-window"
            role="dialog"
            aria-label="Interactive CLI terminal"
            aria-modal="false"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title bar */}
            <div className="cli-titlebar">
              <div className="terminal-dots" aria-hidden="true">
                <i className="dot-red" />
                <i className="dot-yellow" />
                <i className="dot-green" />
              </div>
              <span className="cli-titlebar-name mono">jalgorithm — bash</span>
              <button
                type="button"
                className="cli-titlebar-close"
                onClick={() => setOpen(false)}
                aria-label="Close terminal"
              >
                <CloseIcon size={12} />
              </button>
            </div>

            {/* Output area */}
            <div
              className="cli-output"
              onClick={() => inputRef.current?.focus()}
              aria-live="polite"
              aria-atomic="false"
            >
              {history.map((line, i) => (
                <OutputLine
                  key={i}
                  line={line}
                  animate={animatingLast && i >= history.length - 8}
                />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <form className="cli-input-row" onSubmit={onSubmit}>
              <span className="cli-prompt mono" aria-hidden="true">
                <span className="cli-prompt-host">jalgorithm</span>
                <span className="cli-prompt-sep">:</span>
                <span className="cli-prompt-caret">~$</span>
              </span>
              <input
                ref={inputRef}
                className="cli-input mono"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
                placeholder="type a command…"
              />
            </form>

            {/* Quick-launch chips */}
            <div className="cli-chips" aria-label="Quick commands">
              {['help', 'about', 'skills', 'projects', 'contact', 'status'].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  className="cli-chip mono"
                  onClick={() => { runCommand(cmd); inputRef.current?.focus() }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CliTerminal

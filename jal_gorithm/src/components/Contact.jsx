import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import TextReveal from './TextReveal.jsx'
import { profile, socials } from '../content.js'
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from './icons.jsx'

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  mail: MailIcon,
}

function formatTime() {
  return new Intl.DateTimeFormat('en-PH', {
    timeZone: profile.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())
}

function LiveClock() {
  const [time, setTime] = useState(formatTime)

  useEffect(() => {
    const interval = setInterval(() => setTime(formatTime()), 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <time dateTime={new Date().toISOString()} aria-label="Local time in Pasig City">
      {time}
    </time>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="shell">
        <SectionHeading
          index="06"
          id="contact-title"
          text="Let's make something that moves."
          accent="moves."
        />

        <div className="contact-grid">
          {/* Email card */}
          <Reveal className="contact-card" y={26}>
            <span className="mono contact-card-label">// Email</span>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button
              type="button"
              className={copied ? 'copy-button is-copied' : 'copy-button'}
              onClick={copyEmail}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'copied' : 'copy'}
                  className="copy-button-inner"
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
                  {copied ? 'Copied' : 'Copy email'}
                </motion.span>
              </AnimatePresence>
            </button>
          </Reveal>

          {/* CTA card */}
          <Reveal className="contact-cta" y={26} delay={0.08}>
            <p>
              Open for internships, freelance projects, and collaborations on
              interfaces that need to move well.
            </p>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Start a conversation
              <ArrowUpRightIcon size={16} />
            </a>
            <div className="contact-socials">
              {socials.map((social) => {
                const Icon = ICONS[social.icon] ?? MailIcon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={
                      social.href === '#'
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </Reveal>

          {/* Meta card */}
          <Reveal className="contact-meta" y={26} delay={0.16}>
            <div>
              <span className="mono">// Based in</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span className="mono">// Local time</span>
              <p><LiveClock /></p>
            </div>
            <div>
              <span className="mono">// Coordinates</span>
              <p>{profile.coordinates}</p>
            </div>
            <div>
              <span className="mono">// Status</span>
              <p>
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact

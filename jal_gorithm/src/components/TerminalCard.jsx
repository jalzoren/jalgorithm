import { useEffect, useRef, useState } from 'react'
import { heroCode } from '../content.js'

/**
 * Animated terminal card — types out the hero code line by line.
 */
function TerminalCard({ play = true }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [cursor, setCursor] = useState(true)
  const indexRef = useRef(0)
  const intervalRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!play) return undefined
    const delay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < heroCode.length) {
          const line = heroCode[indexRef.current]
          setVisibleLines((prev) => [...prev, line])
          indexRef.current += 1
        } else {
          clearInterval(intervalRef.current)
        }
      }, 220)
    }, 600)
    return () => {
      clearTimeout(delay)
      clearInterval(intervalRef.current)
    }
  }, [play])

  useEffect(() => {
    cursorRef.current = setInterval(() => setCursor((prev) => !prev), 530)
    return () => clearInterval(cursorRef.current)
  }, [])

  return (
    <div className="terminal-card" role="presentation">
      <div className="terminal-card-top">
        <div className="terminal-dots" aria-hidden="true">
          <i className="dot-red" />
          <i className="dot-yellow" />
          <i className="dot-green" />
        </div>
        <span className="mono terminal-title">jalgorithm.js</span>
        <span className="mono terminal-status">● LIVE</span>
      </div>
      <pre className="terminal-body" aria-label="Profile code sample">
        <code>
          {visibleLines.map((line, index) => (
            <span className="terminal-line" key={index}>
              <span className="terminal-line-num mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="terminal-line-text">{line.text}</span>
            </span>
          ))}
          {visibleLines.length < heroCode.length && (
            <span className="terminal-line">
              <span className="terminal-line-num mono">
                {String(visibleLines.length + 1).padStart(2, '0')}
              </span>
              <span
                className="terminal-cursor"
                aria-hidden="true"
                style={{ opacity: cursor ? 1 : 0 }}
              >
                ▌
              </span>
            </span>
          )}
        </code>
      </pre>
      <div className="terminal-foot">
        <span className="mono">
          <span className="status-dot" aria-hidden="true" />
          Available for work
        </span>
        <span className="mono">PLP · GMT+8</span>
      </div>
    </div>
  )
}

export default TerminalCard

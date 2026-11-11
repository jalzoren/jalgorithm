import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter badge — inspired by Seth's "click me · 343" badge.
 * Increments on click; pulses on mount.
 */
function CounterBadge() {
  const [count, setCount] = useState(0)
  const [pulse, setPulse] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Start from a random seed to feel alive
    setCount(Math.floor(Math.random() * 200) + 42)
  }, [])

  const handleClick = () => {
    setCount((prev) => prev + 1)
    setPulse(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setPulse(false), 300)
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <button
      type="button"
      className={pulse ? 'counter-badge is-pulse' : 'counter-badge'}
      onClick={handleClick}
      aria-label={`Click counter: ${count} clicks`}
    >
      <span className="counter-badge-label">click me</span>
      <span className="counter-badge-sep" aria-hidden="true">·</span>
      <span className="counter-badge-num mono">{count}</span>
    </button>
  )
}

export default CounterBadge

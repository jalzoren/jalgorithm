import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'jalgorithm:pings'

const readCount = () => {
  try {
    const value = Number.parseInt(window.localStorage.getItem(STORAGE_KEY) ?? '', 10)
    return Number.isFinite(value) && value > 0 ? value : 0
  } catch {
    return 0
  }
}

const writeCount = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(value))
  } catch {
    /* storage blocked (private mode): the count still works for this visit */
  }
}

const MILESTONES = {
  1: 'first ping. hello.',
  10: 'ten pings. you are persistent.',
  25: 'twenty-five. still there?',
  50: 'fifty pings. okay, we are friends now.',
  100: 'one hundred. this is a personal best.',
  250: 'two hundred fifty. that is a lot of pinging.',
  500: 'five hundred. please go outside.',
  1000: 'one thousand. legend.',
}
const COMBO_WINDOW = 650
const CLICK_SOUND = '/mixkit-quest-game-interface-click-1139.wav'

/**
 * Ping badge. Each press sends a ping: a ring leaves the button, a +1 floats up,
 * a reply line prints, and rapid presses chain into a combo. The total is stored in
 * localStorage, so it survives refreshes and stays in sync across open tabs.
 * It starts at 0 and only ever counts real presses.
 */
function PingBadge() {
  const [count, setCount] = useState(readCount)
  const [rings, setRings] = useState([])
  const [floats, setFloats] = useState([])
  const [combo, setCombo] = useState(0)
  const [reply, setReply] = useState('')
  const idRef = useRef(0)
  const lastPing = useRef(0)
  const comboRef = useRef(0)
  const replyTimer = useRef(0)
  const soundRef = useRef(null)

  /* preload the click so the first press has no delay */
  useEffect(() => {
    const audio = new Audio(CLICK_SOUND)
    audio.preload = 'auto'
    soundRef.current = audio
  }, [])

  /* keep other tabs in sync */
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) setCount(readCount())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => () => clearTimeout(replyTimer.current), [])

  const ping = () => {
    const next = readCount() + 1
    writeCount(next)
    setCount(next)

    /* combo: presses inside the window chain together */
    const now = performance.now()
    comboRef.current = now - lastPing.current < COMBO_WINDOW ? comboRef.current + 1 : 1
    lastPing.current = now
    setCombo(comboRef.current)

    /* a fresh copy per press so fast clicks overlap; the pitch climbs with the combo */
    const click = soundRef.current?.cloneNode()
    if (click) {
      click.volume = 0.55
      click.playbackRate = 1 + Math.min(comboRef.current - 1, 8) * 0.05
      click.play().catch(() => {})
    }

    const id = ++idRef.current
    const drift = Math.round((Math.random() - 0.5) * 36)
    setRings((current) => [...current.slice(-2), { id, size: Math.min(2.4, 1.4 + comboRef.current * 0.12) }])
    setFloats((current) => [...current.slice(-5), { id, drift, combo: comboRef.current }])
    window.setTimeout(() => {
      setRings((current) => current.filter((item) => item.id !== id))
      setFloats((current) => current.filter((item) => item.id !== id))
    }, 950)

    const ms = 8 + Math.floor(Math.random() * 34)
    const line =
      MILESTONES[next] ??
      (comboRef.current >= 3
        ? `combo x${comboRef.current} · ping #${next.toLocaleString()}`
        : `64 bytes from jalgorithm · ping #${next.toLocaleString()} · ${ms}ms`)
    setReply(line)
    clearTimeout(replyTimer.current)
    replyTimer.current = window.setTimeout(() => {
      setReply('')
      setCombo(0)
    }, 2000)
  }

  return (
    <div className="ping">
      <button
        type="button"
        className={combo >= 3 ? 'counter-badge is-hot' : 'counter-badge'}
        onClick={ping}
        aria-label={`Send a ping. You have pinged ${count} ${count === 1 ? 'time' : 'times'}.`}
      >
        <span className="ping-rings" aria-hidden="true">
          {rings.map((ring) => (
            <span className="ping-ring" key={ring.id} style={{ '--ring-scale': ring.size }} />
          ))}
        </span>
        <span className="ping-floats" aria-hidden="true">
          {floats.map((item) => (
            <span
              className={item.combo >= 3 ? 'ping-float is-hot' : 'ping-float'}
              key={item.id}
              style={{ '--drift': `${item.drift}px` }}
            >
              {item.combo >= 3 ? `+1 x${item.combo}` : '+1'}
            </span>
          ))}
        </span>
        <span className="status-dot" aria-hidden="true" />
        <span className="counter-badge-label">ping</span>
        <span className="counter-badge-sep" aria-hidden="true">·</span>
        <span className="counter-badge-num mono">{count.toLocaleString()}</span>
      </button>
      <span className="ping-reply mono" role="status" aria-live="polite">
        {reply}
      </span>
    </div>
  )
}

export default PingBadge

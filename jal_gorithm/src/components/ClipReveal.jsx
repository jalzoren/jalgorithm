import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1]
const HIDDEN = 'inset(0 0 100% 0)'

function ClipReveal({
  as = 'div',
  id,
  className,
  children,
  shown = 'inset(0 0 -8% 0)',
  duration = 0.7,
  delay = 0,
  y = 24,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px' })
  const Tag = motion[as]
  return (
    <div ref={ref}>
      <Tag
        id={id}
        className={className}
        initial={{ clipPath: HIDDEN, y }}
        animate={inView ? { clipPath: shown, y: 0 } : { clipPath: HIDDEN, y }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </Tag>
    </div>
  )
}

export default ClipReveal

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1]

function SplitText({
  text,
  as = 'span',
  className,
  splitBy = 'word',
  delay = 0,
  stagger = 0.045,
  duration = 0.85,
  y = '110%',
  once = true,
  margin = '0px',
  accent,
  id,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin })
  const reduce = useReducedMotion()
  const Tag = as
  const visible = reduce || inView

  const tokens = splitBy === 'char' ? Array.from(text) : text.split(/(\s+)/)

  return (
    <Tag ref={ref} id={id} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tokens.map((token, index) => {
          if (/^\s+$/.test(token)) {
            return <span key={`space-${index}`}>{token}</span>
          }
          const isAccent = accent && token === accent
          return (
            <span className="split-mask" key={`${token}-${index}`}>
              <motion.span
                className={isAccent ? 'split-item accent' : 'split-item'}
                initial={reduce ? false : { y, opacity: 0 }}
                animate={visible ? { y: '0%', opacity: 1 } : { y, opacity: 0 }}
                transition={{
                  duration,
                  ease: EASE,
                  delay: delay + index * stagger,
                }}
              >
                {token}
              </motion.span>
            </span>
          )
        })}
      </span>
    </Tag>
  )
}

export default SplitText

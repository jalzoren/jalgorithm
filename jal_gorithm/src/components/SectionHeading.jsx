import TextReveal from './TextReveal.jsx'
import Reveal from './Reveal.jsx'

/**
 * Consistent section heading used by every section.
 * index: "01", text: heading string, accent: word to highlight, lede: optional paragraph.
 */
function SectionHeading({ index, text, accent, lede, id }) {
  return (
    <header className="section-head">
      <Reveal as="div" className="section-eyebrow" y={10} duration={0.5}>
        <span className="section-index mono">{index}</span>
        <span className="section-rule-line" aria-hidden="true" />
      </Reveal>
      <TextReveal
        as="h2"
        id={id}
        className="section-title"
        text={text}
        split="word"
        accent={accent}
        scroll
        stagger={0.04}
      />
      {lede && (
        <Reveal as="p" className="section-lede" y={16} delay={0.08}>
          {lede}
        </Reveal>
      )}
    </header>
  )
}

export default SectionHeading

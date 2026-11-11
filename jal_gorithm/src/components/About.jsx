import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import DraggableStickers from './DraggableStickers.jsx'
import { about, profile } from '../content.js'
import { SparkIcon } from './icons.jsx'

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <DraggableStickers
        stickers={[
          { id: 'about-me', shape: 'seal', position: 'top-right', label: 'ABOUT / ME', mark: '01' },
          { id: 'about-detail', shape: 'ticket', position: 'bottom-left', label: 'IN DETAIL', mark: '✳' },
        ]}
      />
      <div className="shell">
        <SectionHeading
          index="01"
          id="about-title"
          text=" A developer with a designer's eye."
          accent="designer's"
          lede={about.lead}
        />

        <div className="about-grid">
          {/* Bio + signature */}
          <Reveal className="about-bio" y={30}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="about-signature">
              <span className="about-signature-wordmark site-wordmark" aria-hidden="true">&gt;_jalgorithm</span>
              <span>
                <span className="mono">{profile.role}</span>
              </span>
            </div>
          </Reveal>

          {/* Now card */}
          <Reveal className="about-card about-now" delay={0.08} y={30}>
            <div className="about-card-head">
              <span className="mono">// Now</span>
              <SparkIcon size={16} />
            </div>
            <div className="about-now-list">
              {about.now.map((item) => (
                <div className="about-now-row" key={item.label}>
                  <span className="mono">{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <div className="about-card-foot">
              <span className="status-dot" aria-hidden="true" />
              <span className="mono">{profile.status}</span>
            </div>
          </Reveal>

          {/* Facts */}
          <Reveal className="about-card about-facts" delay={0.04} y={30}>
            <div className="about-card-head">
              <span className="mono">// Details</span>
              <span className="mono muted">{profile.coordinates}</span>
            </div>
            <dl className="about-facts-list">
              {about.facts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default About

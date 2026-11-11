import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import Logo from './Logo.jsx'
import { about, profile } from '../content.js'
import { SparkIcon } from './icons.jsx'

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="shell">
        <SectionHeading
          index="01"
          id="about-title"
          text="A developer with a designer's eye."
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
              <Logo size={40} className="about-signature-mark" aria-hidden="true" />
              <span>
                <strong>{profile.name}</strong>
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

          {/* Principles */}
          <Reveal className="about-card about-principles" delay={0.12} y={30}>
            <div className="about-card-head">
              <span className="mono">// Principles</span>
              <span className="mono muted">03</span>
            </div>
            <div className="principles-list">
              {about.principles.map((principle, index) => (
                <div className="principle" key={principle.title}>
                  <span className="principle-index mono" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About

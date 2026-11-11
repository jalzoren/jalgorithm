import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { school } from '../content.js'

function School() {
  return (
    <section id="school" className="section school" aria-labelledby="school-title">
      <div className="shell">
        <SectionHeading
          index="05"
          id="school-title"
          text="Still learning, on purpose."
          accent="learning,"
        />

        <Reveal className="school-panel" y={32}>
          {/* Watermark year */}
          <span className="school-watermark" aria-hidden="true">2027</span>

          <div className="school-main">
            <div className="school-head">
              <span className="mono">// Education</span>
              <span className="school-status mono">{school.status}</span>
            </div>
            <h3 className="school-name">{school.name}</h3>
            <p className="school-degree">
              {school.degree}
              <span className="mono school-year"> · {school.yearLabel}</span>
            </p>
            <p className="school-expected mono">{school.expected}</p>

            <div className="school-progress">
              <div className="school-progress-head">
                <span className="mono">{school.progressLabel}</span>
                <span className="mono">{Math.round(school.progress * 100)}%</span>
              </div>
              <div
                className="school-progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={Math.round(school.progress * 100)}
                aria-label="Degree progress"
              >
                <span style={{ '--progress': school.progress }} />
              </div>
            </div>
          </div>

          <div className="school-side">
            <div className="school-seal site-wordmark" aria-hidden="true">
              &gt;_jalgorithm
            </div>
            <h4 className="mono">// Coursework</h4>
            <ul className="school-coursework">
              {school.coursework.map((course) => (
                <li key={course}>
                  <span className="mono course-bullet" aria-hidden="true">›</span>
                  {course}
                </li>
              ))}
            </ul>
            <p className="school-note mono">{school.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default School

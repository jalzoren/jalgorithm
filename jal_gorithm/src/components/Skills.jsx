import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../content.js'
import { ArrowUpRightIcon } from './icons.jsx'

function SkillBar({ level }) {
  // level: 0–1
  return (
    <div className="skill-bar" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < Math.round(level * 5) ? 'skill-bar-seg is-on' : 'skill-bar-seg'}
        />
      ))}
    </div>
  )
}

const LEVEL_MAP = {
  Core: 1,
  Daily: 0.9,
  Learning: 0.5,
}

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="shell">
        <SectionHeading
          index="02"
          id="skills-title"
          text="Tools I reach for."
          accent="reach"
          lede="A working stack, not a checklist. I pick the tool that keeps the interface fast, accessible, and easy to maintain."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              className="skill-group"
              key={group.label}
              delay={index * 0.05}
              y={26}
            >
              <div className="skill-group-head">
                <span className="mono skill-group-note">{group.note}</span>
                <span className="skill-group-index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="skill-group-label">{group.label}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-row" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    <div className="skill-right">
                      <SkillBar level={LEVEL_MAP[item.note] ?? 0.6} />
                      <span className="skill-note mono">{item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills-foot" y={18} delay={0.1}>
          <p>
            <span className="mono">// Currently learning: </span>
            GSAP advanced timelines, design systems, and WebGL shaders.
          </p>
          <a className="btn-text" href="#projects">
            See the work
            <ArrowUpRightIcon size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills

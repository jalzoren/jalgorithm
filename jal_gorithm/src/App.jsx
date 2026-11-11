import { useState } from 'react'
import { MotionConfig, motion, useScroll, useSpring } from 'motion/react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import CliTerminal from './components/CliTerminal.jsx'
import StatusPage from './components/StatusPage.jsx'
import './App.css'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isBuilding = ['/building', '/building-in-progress', '/under-construction'].includes(pathname)

  if (isBuilding || pathname !== '/') {
    return <StatusPage isBuilding={isBuilding} />
  }

  return <Portfolio />
}

function Portfolio() {
  const [ready, setReady] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Preloader onDone={() => setReady(true)} />
      <motion.div
        className="progress-bar"
        aria-hidden="true"
        style={{ scaleX: progress }}
      />
      <div className="shell">
        <Nav />
        <main id="main">
          <Hero ready={ready} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* Floating CLI terminal — lives outside .shell so it's always on top */}
      <CliTerminal />
    </MotionConfig>
  )
}

export default App


import { motion } from 'motion/react'
import Logo from './Logo.jsx'
import { footer, navLinks, profile } from '../content.js'
import { ArrowUpIcon } from './icons.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-wordmark" href="#top" aria-label="Back to top">
          <Logo size={28} />
          <span>JALGORITHM</span>
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
          ))}
        </nav>
        <motion.a
          href="#top"
          className="icon-button footer-top-button"
          aria-label="Back to top"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
        >
          <ArrowUpIcon size={18} />
        </motion.a>
      </div>
      <div className="footer-bottom">
        <p>{footer.credit}</p>
        <p>{footer.built}</p>
      </div>
    </footer>
  )
}

export default Footer

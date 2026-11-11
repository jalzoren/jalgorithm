import { useEffect } from 'react'
import Logo from './Logo.jsx'

function StatusPage({ isBuilding }) {
  useEffect(() => {
    document.title = `${isBuilding ? 'Building' : '404'} — JALGORITHM`
  }, [isBuilding])

  return (
    <main className="status-page" id="main">
      <header className="status-page-header">
        <a className="status-page-brand" href="/" aria-label="JALGORITHM home">
          <Logo size={28} />
          <span className="mono">&gt;_jalgorithm</span>
        </a>
        <span className="mono status-page-code">{isBuilding ? 'STATUS · 01' : 'ERROR · 404'}</span>
      </header>

      <section className="status-page-content" aria-labelledby="status-page-title">
        <div className={isBuilding ? 'status-illustration is-building' : 'status-illustration is-missing'} aria-hidden="true">
          {isBuilding ? (
            <>
            
              <span className="status-building">BUILDING...</span>
              <span className="status-illustration-label mono">IN THE WORKS</span>
            </>
          ) : (
            <>
              <span className="status-404">404</span>
              
              <span className="status-illustration-label mono">ROUTE NOT FOUND</span>
            </>
          )}
        </div>

        <p className="mono status-page-kicker">
          {isBuilding ? '// currently under construction' : '// looks like a wrong turn'}
        </p>
        <h1 id="status-page-title">
          {isBuilding ? <>Building<br />in progress.</> : <>This page<br />is missing.</>}
        </h1>
        <p className="status-page-description">
          {isBuilding
            ? 'This corner of the site is still coming together. Check back soon for something new.'
            : 'The page you are looking for does not exist or may have moved. Let’s get you back on track.'}
        </p>

        <div className="status-page-actions">
          <a className="btn btn-primary" href="/">
            <span aria-hidden="true">←</span> Back home
          </a>
          {isBuilding ? (
            <a className="btn btn-ghost" href="/#projects">Explore projects</a>
          ) : (
            <a className="btn btn-ghost" href="/building">What’s next?</a>
          )}
        </div>
      </section>

      <footer className="status-page-footer mono">
        <span><Logo size={16} /> JALGORITHM</span>
        <span>{isBuilding ? 'GOOD THINGS TAKE A LITTLE TIME' : 'END OF THE LINE — FOR NOW'}</span>
      </footer>
    </main>
  )
}

export default StatusPage

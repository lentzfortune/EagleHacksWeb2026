import React, { useState } from 'react'
import Nav from './nav'
import './App.css'
import heroImg from './assets/EagleHacks2026.png'
import footerLogo from './assets/Eagle_White 1.png'
import GalleryStats from './GalleryStats'
import AboutSection from './AboutSection'
import FaqSection from './FaqSection'

function App() {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <>
      <Nav />
      <main className="app-main">
        <section id="home" className="section hero">
          <h1>EAGLEHACKS</h1>
          <h2>#1 HACKATHON IN SWFL</h2>
          <h3>MARCH 27TH - 29TH 2026</h3>

          <div className="hero-cta">
            <a className="btn register" href="https://uz9vkfej.forms.app/untitled-form" target="_blank">Sign Up</a>
          </div>
          <div className="hero-media">
            <div className="hero-image-wrap">
              <img
                src={heroImg}
                alt="EagleHacks 2026"
                className={`hero-image ${imgLoaded ? 'loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <section id="stats" className="section">
        <GalleryStats />
      </section>
      <section id="about" className="section">
        <AboutSection />
      </section>
      <section id="faq" className="section">
        <FaqSection />
      </section>

      <footer id="connect" className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img className="footer-logo" src={footerLogo} alt="EagleHacks logo" />
            <p className="footer-tagline">Florida Gulf Coast University</p>
          </div>
          <div className="footer-icons">
            <a className="footer-icon-link" href="https://instagram.com/fgcu_cssec" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a className="footer-icon-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 8.2c1-.6 2.6-1 5-1s4 .4 5 1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M6 9.6c-1 1.6-1.6 3.4-1.6 5.2 1.7 1.2 3.7 1.9 5.8 2.1l.6-1.1m6.4 1.1c2.1-.2 4.1-.9 5.8-2.1 0-1.8-.6-3.6-1.6-5.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.2 14.4c.8.6 1.8.9 2.8.9s2-.3 2.8-.9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="9.8" cy="12.2" r="1.1" fill="currentColor" />
                <circle cx="14.2" cy="12.2" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a className="footer-icon-link" href="mailto:fgcu.cssec@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <a className="footer-icon-link" href="https://www.linkedin.com/company/eaglehacks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8.5 10v6" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="8.5" cy="8" r="1" fill="currentColor" />
                <path d="M12 10v6m0-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App

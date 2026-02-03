import React, { useState } from 'react'
import Nav from './nav'
import './App.css'
import heroImg from './assets/EagleHacks2026.png'
import GalleryStats from './GalleryStats'
import AboutSection from './AboutSection'
import SponsorPage from './SponsorPage'

function App() {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <>
      <Nav />
      <main className="app-main">
        <div className="hero">
          <h1>EAGLEHACKS</h1>
          <h2>#1 HACKATHON IN SWFL</h2>
          <h3>MARCH 26TH - 29TH 2026</h3>

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
        </div>
      </main>
      <GalleryStats />
      <AboutSection />
      {/* <SponsorPage /> */}

    </>
  )
}

export default App

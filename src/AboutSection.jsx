import React from 'react'
import './AboutSection.css'
import hero2 from './assets/eaglehacks2.png'

export default function AboutSection() {
  return (
    <section className="about" aria-label="About EagleHacks">
      <div className="about-inner">
        <div className="about-left">
          <h2 className="about-title">About Us!</h2>
          <p className="about-intro">
            Join us for EagleHacks, Southwest Florida's premier hackathon! Over 60+ passionate students from FGCU and beyond will come together to:
          </p>

          <ul className="about-list">
            <li className="about-item"><span className="icon">🔨</span> Create groundbreaking projects that tackle real-world challenges</li>
            <li className="about-item"><span className="icon">🤝</span> Connect with mentors, sponsors, and industry leaders</li>
            <li className="about-item"><span className="icon">🧠</span> Gain hands-on experience with the latest tools and technologies</li>
          </ul>

          <p className="about-cta"><strong>EagleHacks is where bold ideas turn into reality, in just 36 hours. Don’t just watch the future happen… Build it with us.</strong></p>
        </div>

        <div className="about-right">
          <div className="about-image-wrap">
            <img src={hero2} alt="EagleHacks participants" />
          </div>
        </div>
      </div>
    </section>
  )
}

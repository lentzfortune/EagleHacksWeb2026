import React from 'react'
import './SponsorPage.css'

export default function SponsorPage() {
  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="sponsors-title">Sponsors</h2>

      <div className="sponsors-panel">
        <div className="sponsor-grid">
          {/* Placeholder sponsor boxes - replace with <img src="..." /> when available */}
          {Array.from({ length: 1 }).map((_, i) => (
            <div className="sponsor-box" key={i}>
              <div className="sponsor-placeholder">TBA</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

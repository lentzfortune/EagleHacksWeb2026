import React, { useState } from 'react'
import './nav.css'
import logoSrc from './assets/Eagle_White 1.png' // replace with your logo: ./assets/your-logo.png or /logo.png in public/

export default function Nav() {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((v) => !v)
  }

  function close() {
    setOpen(false)
  }

  return (
    <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-left">
          <a href="#" className="brand" onClick={close}>
            <img src={logoSrc} alt="Logo" className="nav-logo" />
          </a>

          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>

          <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
            <li><a href="#" onClick={close}>Home</a></li>
            <li><a href="#sponsors" onClick={close}>Sponsors</a></li>
            <li><a href="#" onClick={close}>Our Team</a></li>
            {/* mobile-only sign up (appears in dropdown on phones) */}
            <li className="mobile-signup"><a className="btn signup" href="https://uz9vkfej.forms.app/untitled-form" target="_blank" rel="noopener noreferrer" onClick={close}>Sign Up</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <a className="btn signup" href="https://uz9vkfej.forms.app/untitled-form" target="_blank" rel="noopener noreferrer">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

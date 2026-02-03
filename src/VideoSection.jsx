import React from 'react'
import './VideoSection.css'
import videoSrc from './assets/eaglehacksvideo.mp4'

export default function VideoSection() {
  return (
    <section className="gallery-video" aria-label="EagleHacks video">
      <div className="video-inner">
        <h3 className="video-title">Watch Our Previous Highlights</h3>
        <div className="video-wrapper">
          <video
            src={videoSrc}
            controls
            preload="metadata"
            poster=""
            aria-label="EagleHacks highlights video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="video-caption">Click play to watch our event highlights.</p>
      </div>
    </section>
  )
}

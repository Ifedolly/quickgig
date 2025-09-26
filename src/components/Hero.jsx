 
import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

const Hero = ({
  title='QuickGig', 
  subtitle=['Your go-to platform for hiring skilled experts on demand —',
    'whether it’s an urgent project, event support, or a short-term gig.'
  ]
  } ) => {
  return (
    <section className="hero-section">
      <div className="hero-container" data-aos="zoom-in">
        <div className="hero-text">
          <h1 className="hero-title" data-aos="zoom-in">
            {title}
          </h1>
          <div className="hero-subtitle" data-aos="zoom-in">
            {Array.isArray(subtitle)
              ? subtitle.map((line, i) => (
                  <p key={i} className="hero-subtitle-line">{line}</p>
                ))
              : <p className="hero-subtitle-line">{subtitle}</p>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
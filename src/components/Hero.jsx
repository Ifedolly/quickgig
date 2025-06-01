 
import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

const Hero = ({
  title='QuickGig', 
  subtitle='Got a deadline? We’ve got the expert.'} ) => {
  return (
    <section className="hero-section">
      <div className="hero-container" data-aos="zoom-in">
        <div className="hero-text">
          <h1 className="hero-title">
            {title}
          </h1>
          <p className="hero-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
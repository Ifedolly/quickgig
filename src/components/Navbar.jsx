import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)

  const handleScroll = () => {
    const currentY = window.scrollY
    if (currentY > lastScrollY) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
    setLastScrollY(currentY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add-job">Post a Job</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

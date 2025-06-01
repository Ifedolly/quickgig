import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link-active' : 'nav-link';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true); // When Scrolling Down
      } else {
        setScrollingDown(false); // When Scrolling Up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navbarClasses = `navbar ${scrollingDown ? 'navbar-hidden' : 'navbar-visible'}`;

  return (
    <nav
      className={navbarClasses}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <NavLink className="logo" to="/">
            <span className="logo-text">QG</span>
          </NavLink>
          <div className="nav-links">
            <NavLink to="/jobs" className={linkClass}>
              GIGS
            </NavLink>
            <NavLink to="/add-job" className={linkClass}>
              ADD GIG
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

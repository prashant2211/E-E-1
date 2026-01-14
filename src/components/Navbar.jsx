import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Images/logo.jpeg" alt="Sriyansh Institute Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-siit">SIIT</span>
            <span className="logo-name">Sriyansh Institute</span>
            <span className="logo-tagline">of Information Technology</span>
          </div>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            to="/courses" 
            className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Courses
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Our Services
          </Link>
          <Link 
            to="/certifications" 
            className={`nav-link ${isActive('/certifications') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Certifications
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link 
            to="/login" 
            className="nav-link login-btn"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


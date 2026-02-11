import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sriyansh Institute</h3>
            <p className="footer-tagline">of Information Technology</p>
            <p className="footer-description">
              Empowering students with quality computer education and training 
              to excel in the digital world.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone:</strong>
                  <div className="phone-numbers">
                    <a href="tel:9572420157">9572420157</a>
                    <span> / </span>
                    <a href="tel:9470253742">9470253742</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address:</strong>
                  <p className="address">
                    Village + Post- Warispur,<br />
                    Near Ranjeet Singh dhawa,<br />
                    Bhagwanpur, Vaishali Bihar,<br />
                    844114
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sriyansh Institute of Information Technology. All rights reserved.</p>
          <p className="developer-credit">
            Developed by{' '}
            <a 
              href="https://www.educationaleternity.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Educational Eternity
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


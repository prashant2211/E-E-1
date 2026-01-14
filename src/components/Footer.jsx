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
              <p><strong>Phone:</strong> 9470253742</p>
              <p><strong>Address:</strong></p>
              <p className="address">
                Village + Post- Warispur,<br />
                Near Ranjeet Singh dhawa,<br />
                Bhagwanpur, Vaishali Bihar,<br />
                844114
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Leadership</h4>
            <div className="leadership-info">
              <p><strong>Chairman:</strong> Sashi Bhushan Kumar</p>
              <p><strong>Secretary:</strong> Subodh Sharma</p>
              <p><strong>Principal:</strong> Sarika Kumari</p>
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


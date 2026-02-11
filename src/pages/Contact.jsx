import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">Get in Touch with Us</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="info-description">
                We'd love to hear from you. Reach out to us through any of the 
                following channels or fill out the contact form.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h3>Address</h3>
                    <p>
                      Village + Post- Warispur,<br />
                      Near Ranjeet Singh dhawa,<br />
                      Bhagwanpur, Vaishali Bihar,<br />
                      844114
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-details">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:9572420157">9572420157</a>
                      <br />
                      <a href="tel:9470253742">9470253742</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">👔</div>
                  <div className="info-details">
                    <h3>Leadership</h3>
                    <p>
                      <strong>Chairman:</strong> Sashi Bhushan Kumar<br />
                      <strong>Secretary:</strong> Subodh Sharma<br />
                      <strong>Principal:</strong> Sarika Kumari
                    </p>
                  </div>
                </div>
              </div>

              <div className="map-section">
                {/* <h3>Find Us on Map</h3> */}
                <div className="map-placeholder">
                  <p>📍 Bhagwanpur, Vaishali, Bihar</p>
                  {/* <p className="map-note">Map integration can be added here</p> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'Comprehensive computer education programs designed to meet industry standards and student needs.'
    },
    {
      icon: '💻',
      title: 'Modern Labs',
      description: 'State-of-the-art computer labs equipped with latest hardware and software for hands-on learning.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Experienced instructors with industry expertise providing personalized attention to students.'
    },
    {
      icon: '📜',
      title: 'Certification Programs',
      description: 'Recognized certification courses that add value to your resume and career prospects.'
    },
    {
      icon: '📚',
      title: 'Study Materials',
      description: 'Comprehensive study materials, notes, and resources provided to all enrolled students.'
    },
    {
      icon: '🔄',
      title: 'Flexible Timings',
      description: 'Multiple batch timings available to accommodate students from different schedules.'
    },
    {
      icon: '🤝',
      title: 'Placement Support',
      description: 'Career guidance and placement assistance to help students secure job opportunities.'
    },
    {
      icon: '🏆',
      title: 'Awards & Recognition',
      description: 'Regular award ceremonies and recognition programs to motivate and celebrate student achievements.'
    },
    {
      icon: '📞',
      title: 'Student Support',
      description: 'Dedicated support team available to assist students with queries and concerns.'
    }
  ]

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-subtitle">Comprehensive Solutions for Your Educational Needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-item">
              <div className="offer-number">01</div>
              <h3>Comprehensive Course Curriculum</h3>
              <p>Well-structured courses covering all aspects from basics to advanced levels</p>
            </div>
            <div className="offer-item">
              <div className="offer-number">02</div>
              <h3>Practical Training</h3>
              <p>Hands-on practice sessions with real-world projects and assignments</p>
            </div>
            <div className="offer-item">
              <div className="offer-number">03</div>
              <h3>Regular Assessments</h3>
              <p>Periodic tests and evaluations to track student progress</p>
            </div>
            <div className="offer-item">
              <div className="offer-number">04</div>
              <h3>Industry Connections</h3>
              <p>Networking opportunities with industry professionals and companies</p>
            </div>
            <div className="offer-item">
              <div className="offer-number">05</div>
              <h3>Workshops & Seminars</h3>
              <p>Regular workshops and seminars on latest technologies and trends</p>
            </div>
            <div className="offer-item">
              <div className="offer-number">06</div>
              <h3>Lifetime Support</h3>
              <p>Continued support and guidance even after course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="services-gallery">
        <div className="container">
          <h2 className="section-title">Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <img src="/Images/lab1.png" alt="Computer Lab" />
              <h4>Modern Computer Lab</h4>
            </div>
            <div className="facility-item">
              <img src="/Images/lab3.png" alt="Lab Facility" />
              <h4>Advanced Lab Facility</h4>
            </div>
            <div className="facility-item">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.33.jpeg" alt="Facility" />
              <h4>Modern Classrooms</h4>
            </div>
            <div className="facility-item">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.34 (2).jpeg" alt="Facility" />
              <h4>Training Sessions</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services


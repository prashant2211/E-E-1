import './About.css'

const About = () => {
  const governmentAffiliations = [
    {
      program: 'National Digital Literacy Mission',
      under: 'Digital India Programme',
      ministry: 'Ministry of Electronics & IT, Govt. of India',
      icon: '🇮🇳'
    },
    {
      organization: 'NIELIT',
      approved_courses: ['BCC', 'CCC'],
      icon: '🏛️'
    },
    {
      organization: 'Ministry of HRD',
      department: 'Higher Secondary Education Dept., Govt. of India',
      icon: '📚'
    },
    {
      organization: 'ISO',
      certification: 'ISO 9001:2008',
      icon: '⭐'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-title-animated">About Us</h1>
          <p className="hero-subtitle">Excellence in Computer Education Since 2018</p>
        </div>
      </section>

      {/* Institute Info Section */}
      <section className="institute-info-section">
        <div className="container">
          <div className="institute-card">
            <div className="institute-header">
              <h2>Sriyansh Institute of Information Technology</h2>
              <p className="institute-tagline">India's Leading Institute of Computer Education & IT Media Management</p>
            </div>
            <div className="institute-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <a href="mailto:siitcomputeredu@gmail.com">siitcomputeredu@gmail.com</a>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📋</span>
                <div>
                  <strong>Registration:</strong>
                  <span>Registered under G.I.T.T (VATRO)</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🔢</span>
                <div>
                  <strong>Registration No:</strong>
                  <span>14/2017-18</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <div>
                  <strong>Established:</strong>
                  <span>29-07-2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Sriyansh Institute of Information Technology is committed to providing 
                high-quality computer education and training to students, empowering them 
                with the skills and knowledge needed to excel in the rapidly evolving 
                technology landscape.
              </p>
              <p>
                As India's Leading Institute of Computer Education & IT Media Management, 
                we strive to bridge the gap between theoretical knowledge and practical 
                application, ensuring our students are industry-ready and equipped to 
                face real-world challenges.
              </p>
            </div>
            <div className="mission-image">
              <img src="/Images/principal.jpeg" alt="Principal" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Infrastructure Section with Details */}
      <section className="tech-details-section">
        <div className="container">
          <h2 className="section-title">Our Technology & Infrastructure</h2>
          
          {/* Tech3 - Main Technology Image */}
          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/tech3.png" alt="Advanced Technology Infrastructure" />
            </div>
            <div className="image-detail-content">
              <h3>Advanced Technology Infrastructure</h3>
              <p className="detail-description">
                Our institute is equipped with state-of-the-art technology infrastructure 
                designed to provide students with the best learning experience. We feature 
                modern computer systems, high-speed internet connectivity, and cutting-edge 
                software tools that are essential for comprehensive IT education.
              </p>
              <ul className="detail-features">
                <li>Latest generation computer systems</li>
                <li>High-speed internet connectivity</li>
                <li>Industry-standard software and tools</li>
                <li>Modern learning management systems</li>
                <li>24/7 technical support</li>
              </ul>
            </div>
          </div>

          {/* Lab Images */}
          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/lab1.png" alt="Modern Computer Lab 1" />
            </div>
            <div className="image-detail-content">
              <h3>Modern Computer Laboratory</h3>
              <p className="detail-description">
                Our primary computer laboratory features 50+ high-performance workstations 
                equipped with the latest hardware and software. Each system is configured 
                with multiple operating systems and development environments to support 
                various programming languages and software applications.
              </p>
              <ul className="detail-features">
                <li>50+ high-performance workstations</li>
                <li>Dual-boot systems (Windows & Linux)</li>
                <li>Latest development tools and IDEs</li>
                <li>Air-conditioned environment</li>
                <li>Projector and smart board facilities</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/lab3.png" alt="Advance Class Room" />
            </div>
            <div className="image-detail-content">
              <h3>Advance Class Room</h3>
              <p className="detail-description">
                Our advanced classrooms are designed to provide an optimal learning environment 
                with modern teaching aids and technology. Each classroom is equipped with 
                smart boards, projectors, and comfortable seating arrangements to facilitate 
                effective learning and student engagement.
              </p>
              <ul className="detail-features">
                <li>Smart board technology for interactive learning</li>
                <li>High-quality projectors and audio-visual systems</li>
                <li>Comfortable and ergonomic seating arrangements</li>
                <li>Optimal lighting and air-conditioning</li>
                <li>Whiteboards and display boards for presentations</li>
                <li>Spacious layout for group activities</li>
                <li>Modern teaching aids and equipment</li>
              </ul>
            </div>
          </div>

          {/* Technology Infrastructure */}
          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/img1.png" alt="IT Infrastructure & Network Systems" />
            </div>
            <div className="image-detail-content">
              <h3>IT Infrastructure & Network Systems</h3>
              <p className="detail-description">
                Our institute features a robust IT infrastructure with advanced networking 
                systems, server configurations, and cloud computing facilities. We maintain 
                high-speed internet connectivity, secure data storage, and backup systems 
                to ensure seamless operations and data security for all our educational programs.
              </p>
              <ul className="detail-features">
                <li>Advanced networking infrastructure</li>
                <li>Server and cloud computing facilities</li>
                <li>High-speed internet and Wi-Fi connectivity</li>
                <li>Secure data storage and backup systems</li>
                <li>Network security and firewall protection</li>
                <li>IT support and maintenance services</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/img3.png" alt="Students at SIIT" />
            </div>
            <div className="image-detail-content">
              <h3>Our Student Community</h3>
              <p className="detail-description">
                We take pride in our diverse and vibrant student community. Our students 
                come from various backgrounds and are united by their passion for technology 
                and learning. We foster a collaborative environment where students support 
                each other's growth.
              </p>
              <ul className="detail-features">
                <li>Diverse student community</li>
                <li>Collaborative learning environment</li>
                <li>Student support programs</li>
                <li>Regular student activities</li>
                <li>Peer learning opportunities</li>
              </ul>
            </div>
          </div>

          {/* Training and Activities */}
          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/img2.png" alt="Hands-On Practical Training" />
            </div>
            <div className="image-detail-content">
              <h3>Hands-On Practical Training</h3>
              <p className="detail-description">
                Our training sessions emphasize practical, hands-on learning in a beautiful 
                and conducive campus environment. Students work on real-world projects and 
                assignments that prepare them for industry challenges. Our instructors provide 
                personalized guidance to ensure every student understands the concepts thoroughly 
                while enjoying the serene campus atmosphere.
              </p>
              <ul className="detail-features">
                <li>Real-world project assignments</li>
                <li>Personalized instructor guidance</li>
                <li>Industry-relevant curriculum</li>
                <li>Regular practice sessions</li>
                <li>Assessment and feedback</li>
                <li>Beautiful campus learning environment</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.34 (2).jpeg" alt="Training Program" />
            </div>
            <div className="image-detail-content">
              <h3>Comprehensive Training Programs</h3>
              <p className="detail-description">
                We offer comprehensive training programs that cover all aspects of computer 
                science and information technology. Our programs are designed to provide 
                both theoretical knowledge and practical skills necessary for career success.
              </p>
              <ul className="detail-features">
                <li>Theory and practical balance</li>
                <li>Industry-aligned curriculum</li>
                <li>Regular assessments</li>
                <li>Certification programs</li>
                <li>Career guidance support</li>
              </ul>
            </div>
          </div>

          {/* Additional Images */}
          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.26.jpeg" alt="Campus Activities" />
            </div>
            <div className="image-detail-content">
              <h3>Campus Activities & Events</h3>
              <p className="detail-description">
                We regularly organize various campus activities and events to enhance the 
                learning experience and build a strong community. These activities include 
                workshops, seminars, competitions, and cultural events.
              </p>
              <ul className="detail-features">
                <li>Regular workshops and seminars</li>
                <li>Technical competitions</li>
                <li>Cultural events</li>
                <li>Guest lectures</li>
                <li>Industry visits</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.27.jpeg" alt="Student Engagement" />
            </div>
            <div className="image-detail-content">
              <h3>Active Student Engagement</h3>
              <p className="detail-description">
                Our students actively participate in various learning activities and group 
                projects. We encourage collaborative learning and peer interaction to 
                enhance understanding and build teamwork skills.
              </p>
              <ul className="detail-features">
                <li>Group project activities</li>
                <li>Peer learning sessions</li>
                <li>Study groups</li>
                <li>Interactive learning</li>
                <li>Student presentations</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.29.jpeg" alt="Classroom Learning" />
            </div>
            <div className="image-detail-content">
              <h3>Modern Classroom Learning</h3>
              <p className="detail-description">
                Our classrooms are designed to facilitate effective learning with modern 
                teaching aids and comfortable seating arrangements. Each classroom is 
                equipped with projectors, smart boards, and audio-visual systems.
              </p>
              <ul className="detail-features">
                <li>Smart board technology</li>
                <li>Audio-visual systems</li>
                <li>Comfortable seating</li>
                <li>Optimal lighting and ventilation</li>
                <li>Interactive learning tools</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.30.jpeg" alt="Course Information" />
            </div>
            <div className="image-detail-content">
              <h3>Comprehensive Course Information</h3>
              <p className="detail-description">
                We provide detailed information about all our courses through various 
                displays and materials. Students can easily access information about 
                course curriculum, duration, fees, and career prospects.
              </p>
              <ul className="detail-features">
                <li>Detailed course brochures</li>
                <li>Information displays</li>
                <li>Career guidance materials</li>
                <li>Course comparison charts</li>
                <li>Student testimonials</li>
              </ul>
            </div>
          </div>

          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/WhatsApp Image 2026-01-12 at 12.58.34.jpeg" alt="Lab Sessions" />
            </div>
            <div className="image-detail-content">
              <h3>Regular Lab Practice Sessions</h3>
              <p className="detail-description">
                Regular lab sessions are conducted to ensure students get ample practice 
                with various software and hardware. These sessions help students build 
                confidence and develop practical skills essential for their careers.
              </p>
              <ul className="detail-features">
                <li>Scheduled practice sessions</li>
                <li>Individual attention</li>
                <li>Problem-solving exercises</li>
                <li>Skill development activities</li>
                <li>Progress tracking</li>
              </ul>
            </div>
          </div>

          {/* Award Ceremony */}
          <div className="image-detail-card">
            <div className="image-detail-image">
              <img src="/Images/Award Ceromony.jpeg" alt="Award Ceremony" />
            </div>
            <div className="image-detail-content">
              <h3>Student Recognition & Awards</h3>
              <p className="detail-description">
                We regularly organize award ceremonies to recognize and celebrate the 
                achievements of our outstanding students. These events motivate students 
                to excel and provide well-deserved recognition for their hard work and 
                dedication.
              </p>
              <ul className="detail-features">
                <li>Regular award ceremonies</li>
                <li>Recognition for top performers</li>
                <li>Progress awards</li>
                <li>Innovation awards</li>
                <li>Certificate distribution</li>
              </ul>
            </div>
          </div>

          {/* ISO Certificate */}
          <div className="image-detail-card reverse">
            <div className="image-detail-image">
              <img src="/Images/ISO Certificate.jpeg" alt="ISO 9001:2008 Certificate" />
            </div>
            <div className="image-detail-content">
              <h3>ISO 9001:2008 Certification</h3>
              <p className="detail-description">
                Sriyansh Institute of Information Technology is ISO 9001:2008 certified, 
                demonstrating our commitment to quality education and continuous improvement. 
                This certification ensures that we maintain the highest standards in all 
                our educational processes and services.
              </p>
              <ul className="detail-features">
                <li>International quality standards</li>
                <li>Continuous improvement processes</li>
                <li>Quality management systems</li>
                <li>Regular audits and reviews</li>
                <li>Student satisfaction focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Affiliations */}
      <section className="affiliations-section">
        <div className="container">
          <h2 className="section-title">Government Affiliations & Recognitions</h2>
          <div className="affiliations-grid">
            {governmentAffiliations.map((affiliation, index) => (
              <div 
                key={index} 
                className="affiliation-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="affiliation-icon">{affiliation.icon}</div>
                {affiliation.program && (
                  <>
                    <h3>{affiliation.program}</h3>
                    <p className="affiliation-under">{affiliation.under}</p>
                    <p className="affiliation-ministry">{affiliation.ministry}</p>
                  </>
                )}
                {affiliation.organization && (
                  <>
                    <h3>{affiliation.organization}</h3>
                    {affiliation.approved_courses && (
                      <div className="approved-courses">
                        <p>Approved Courses:</p>
                        <div className="course-badges">
                          {affiliation.approved_courses.map((course, idx) => (
                            <span key={idx} className="course-badge">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {affiliation.department && (
                      <p className="affiliation-detail">{affiliation.department}</p>
                    )}
                    {affiliation.ministry && (
                      <p className="affiliation-detail">{affiliation.ministry}</p>
                    )}
                    {affiliation.type && (
                      <p className="affiliation-detail">{affiliation.type}</p>
                    )}
                    {affiliation.certification && (
                      <p className="affiliation-cert">{affiliation.certification}</p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-icon">👔</div>
              <h3>Chairman</h3>
              <p className="leader-name">Sashi Bhushan Kumar</p>
              <p className="leader-role">Visionary Leader</p>
            </div>
            <div className="leader-card">
              <div className="leader-icon">📋</div>
              <h3>Secretary</h3>
              <p className="leader-name">Subodh Sharma</p>
              <p className="leader-role">Administrative Head</p>
            </div>
            <div className="leader-card featured">
              <div className="leader-image">
                <img src="/Images/principal.jpeg" alt="Principal" />
              </div>
              <h3>Principal</h3>
              <p className="leader-name">Sarika Kumari</p>
              <p className="leader-role">Academic Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in education and training</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Embracing new technologies and teaching methodologies</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Maintaining honesty and ethical practices in all endeavors</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Student Success</h3>
              <p>Dedicated to the growth and achievement of every student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Sriyansh Institute?</h2>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-number">01</span>
              <h3>ISO 9001:2008 Certified</h3>
              <p>Recognized quality standards ensuring excellence in education</p>
            </div>
            <div className="why-item">
              <span className="why-number">02</span>
              <h3>Government Recognized</h3>
              <p>Affiliated with multiple government programs and ministries</p>
            </div>
            <div className="why-item">
              <span className="why-number">03</span>
              <h3>Experienced Faculty</h3>
              <p>Learn from industry experts with years of practical experience</p>
            </div>
            <div className="why-item">
              <span className="why-number">04</span>
              <h3>Comprehensive Curriculum</h3>
              <p>27+ courses covering all aspects of computer science and IT</p>
            </div>
            <div className="why-item">
              <span className="why-number">05</span>
              <h3>Career Support</h3>
              <p>Placement assistance and career guidance for students</p>
            </div>
            <div className="why-item">
              <span className="why-number">06</span>
              <h3>Modern Infrastructure</h3>
              <p>State-of-the-art labs and facilities for hands-on learning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

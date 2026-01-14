import './Certifications.css'

const Certifications = () => {
  return (
    <div className="certifications">
      {/* Hero Section */}
      <section className="certifications-hero">
        <div className="container">
          <h1>Certifications</h1>
          <p className="hero-subtitle">Recognized Certificates for Your Career Growth</p>
        </div>
      </section>

      {/* ISO Certificate Section */}
      <section className="iso-section">
        <div className="container">
          <div className="iso-content">
            <div className="iso-text">
              <h2>ISO Certified Institution</h2>
              <p>
                Sriyansh Institute of Information Technology is proud to be an 
                ISO certified institution, ensuring the highest standards of 
                quality in education and training.
              </p>
              <p>
                Our ISO certification demonstrates our commitment to:
              </p>
              <ul className="iso-benefits">
                <li>Quality Management Systems</li>
                <li>Continuous Improvement</li>
                <li>Student Satisfaction</li>
                <li>Excellence in Education</li>
                <li>Professional Standards</li>
              </ul>
            </div>
            <div className="iso-certificate">
              <img 
                src="/Images/ISO Certificate.jpeg" 
                alt="ISO Certificate" 
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Certificates Section */}
      <section className="course-certificates">
        <div className="container">
          <h2 className="section-title">Course Completion Certificates</h2>
          <div className="certificates-grid">
            <div className="certificate-card">
              <div className="cert-icon">📜</div>
              <h3>Basic Computer Course</h3>
              <p>Certificate of completion for basic computer training</p>
            </div>
            <div className="certificate-card">
              <div className="cert-icon">💻</div>
              <h3>Programming Courses</h3>
              <p>Certificates for C, C++, Java and other programming languages</p>
            </div>
            <div className="certificate-card">
              <div className="cert-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Full-stack web development certification</p>
            </div>
            <div className="certificate-card">
              <div className="cert-icon">🎨</div>
              <h3>Design Courses</h3>
              <p>Graphic design and digital marketing certificates</p>
            </div>
            <div className="certificate-card">
              <div className="cert-icon">🏆</div>
              <h3>Advanced Programs</h3>
              <p>Certificates for advanced programming and software development</p>
            </div>
            <div className="certificate-card">
              <div className="cert-icon">⭐</div>
              <h3>Specialized Training</h3>
              <p>Certificates for specialized IT training programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Award Ceremony Section */}
      <section className="awards-section">
        <div className="container">
          <h2 className="section-title">Award Ceremonies</h2>
          <div className="awards-content">
            <div className="awards-text">
              <p>
                We regularly organize award ceremonies to recognize and celebrate 
                the achievements of our outstanding students. These ceremonies 
                motivate students to excel in their studies and provide them with 
                well-deserved recognition for their hard work and dedication.
              </p>
              <div className="award-features">
                <div className="award-feature">
                  <span className="feature-icon">🏅</span>
                  <div>
                    <h4>Top Performers</h4>
                    <p>Recognition for top-performing students</p>
                  </div>
                </div>
                <div className="award-feature">
                  <span className="feature-icon">📈</span>
                  <div>
                    <h4>Progress Awards</h4>
                    <p>Celebrating significant improvement</p>
                  </div>
                </div>
                <div className="award-feature">
                  <span className="feature-icon">💡</span>
                  <div>
                    <h4>Innovation Awards</h4>
                    <p>Recognizing creative projects and ideas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="awards-image">
              <img 
                src="/Images/Award Ceromony.jpeg" 
                alt="Award Ceremony" 
                className="award-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cert-benefits">
        <div className="container">
          <h2 className="section-title">Benefits of Our Certificates</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <h3>Industry Recognition</h3>
              <p>Certificates recognized by employers and industry professionals</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <h3>Career Advancement</h3>
              <p>Boost your resume and improve job prospects</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <h3>Skill Validation</h3>
              <p>Official proof of your acquired skills and knowledge</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <h3>Professional Credibility</h3>
              <p>Enhance your professional credibility in the job market</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications


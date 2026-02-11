import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Animated Background Elements */}
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Sriyansh Institute</span>
            </h1>
            <p className="hero-subtitle">of Information Technology</p>
            <p className="hero-description">
              Empowering the next generation with cutting-edge computer education, professional training,
              and dedicated career & education consultancy. Your journey to excellence starts here with
              the right course, right guidance, and right career plan.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-tech-image">
              <img src="/Images/tech3.png" alt="Technology" className="tech-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Career CTA Section */}
      <section className="hero-cta-section">
        <div className="cta-background-overlay"></div>
        <div className="cta-content-wrapper">
          <div className="cta-main-content">
            <div className="cta-badge-container">
              <span className="cta-badge">🎓 ISO Certified</span>
            </div>
            <h2 className="cta-main-title">
              Transform Your <span className="cta-highlight">Career</span>
            </h2>
            <p className="cta-main-description">
              Join 1000+ successful students who have built their future with SIIT. 
              Start your journey towards excellence in Information Technology today and
              get expert counselling to choose the perfect course and career path for you.
            </p>
            <div className="cta-stats-grid">
              <div className="cta-stat-card">
                <div className="stat-icon-wrapper">👥</div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Active Students</span>
                </div>
              </div>
              <div className="cta-stat-card">
                <div className="stat-icon-wrapper">📚</div>
                <div className="stat-content">
                  <span className="stat-number">27+</span>
                  <span className="stat-label">Courses Available</span>
                </div>
              </div>
              <div className="cta-stat-card">
                <div className="stat-icon-wrapper">🏆</div>
                <div className="stat-content">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
              <div className="cta-stat-card">
                <div className="stat-icon-wrapper">⭐</div>
                <div className="stat-content">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Certified Programs</span>
                </div>
              </div>
            </div>
            <div className="cta-action-buttons">
              <Link to="/courses" className="cta-btn-primary">Explore Courses</Link>
              <Link to="/contact" className="cta-btn-secondary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Admissions Open Section */}
      <section className="admission-open-section">
        <div className="admission-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="admission-grid">
            <div className="admission-media">
              <div className="admission-media-badge">Admissions Open</div>
              <img
                src="/Images/WhatsApp Image 2026-01-16 at 16.17.46.jpeg"
                alt="Admissions at Sriyansh Institute"
                className="admission-img"
                loading="lazy"
              />
            </div>

            <div className="admission-content">
              <div className="admission-badge">Limited Seats • New Batches</div>
              <h2 className="admission-title">
                Admissions Open for <span className="admission-highlight">New Batches</span>
              </h2>
              <p className="admission-subtitle">
                Start your journey with SIIT and gain real, job-ready skills through hands-on training,
                modern labs, and industry-relevant courses.
              </p>

              <div className="admission-points">
                <div className="admission-point">
                  <span className="admission-point-icon">✅</span>
                  <span>ISO Certified & Government Recognized Programs</span>
                </div>
                <div className="admission-point">
                  <span className="admission-point-icon">💻</span>
                  <span>Practical Training + Regular Lab Practice Sessions</span>
                </div>
                <div className="admission-point">
                  <span className="admission-point-icon">🎯</span>
                  <span>Career Guidance & Skill-Based Learning</span>
                </div>
              </div>

              <div className="admission-actions">
                <Link to="/contact" className="admission-btn admission-btn-primary">
                  Enquire Now
                </Link>
                <Link to="/courses" className="admission-btn admission-btn-secondary">
                  View Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career & Education Consultancy Section */}
      <section className="consultancy-section">
        <div className="container">
          <div className="consultancy-grid">
            <div className="consultancy-text">
              <span className="consultancy-badge">Career & Education Consultancy</span>
              <h2 className="consultancy-title">
                Confused about which course or career to choose?
              </h2>
              <p className="consultancy-description">
                Our experienced counsellors help students and parents understand all available options
                after 10th, 12th and Graduation – from computer courses to ANM/GNM, degree programs,
                professional courses and more – so you can take the right decision with confidence.
              </p>
              <div className="consultancy-points">
                <div className="consultancy-point">
                  <span className="consultancy-icon">🧭</span>
                  <span>Personalised counselling based on interest, ability and budget</span>
                </div>
                <div className="consultancy-point">
                  <span className="consultancy-icon">🎓</span>
                  <span>Guidance for computer, nursing, management and university courses</span>
                </div>
                <div className="consultancy-point">
                  <span className="consultancy-icon">📄</span>
                  <span>Support for admission process, documents and course selection</span>
                </div>
              </div>
              <div className="consultancy-actions">
                <Link to="/contact" className="consultancy-btn primary">
                  Book Free Counselling
                </Link>
                <a href="tel:9572420157" className="consultancy-btn secondary">
                  Call Counsellor
                </a>
              </div>
            </div>

            <div className="consultancy-highlight-card">
              <div className="consultancy-highlight-header">
                <span className="highlight-icon">💡</span>
                <h3>Get a Clear Career Roadmap</h3>
              </div>
              <p>
                In one detailed session, we help you understand suitable courses, future scope,
                fees, duration and career opportunities – so that every step in your education
                journey is planned.
              </p>
              <div className="consultancy-highlight-stats">
                <div className="consultancy-stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Students Guided</span>
                </div>
                <div className="consultancy-stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Career Paths</span>
                </div>
                <div className="consultancy-stat">
                  <span className="stat-number">1:1</span>
                  <span className="stat-label">Personal Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIIT Image Section */}
      <section className="siit-image-section">
        <div className="siit-image-wrapper">
          <img src="/Images/siit1.png" alt="Sriyansh Institute of Information Technology" className="siit-main-image" />
        </div>
      </section>

      {/* Full Screen Campus Images */}
      <section className="campus-fullscreen-gallery">
        <div className="fullscreen-facility-section">
          <div className="fullscreen-image-wrapper facility-image-wrapper">
            <img
              src="/Images/HinTem.jpeg"
              alt="Peaceful environment around Sriyansh Institute"
              className="fullscreen-image"
              loading="lazy"
            />
          </div>
          <div className="facility-content">
            <h2 className="facility-title">
              अनुभवी काउंसलर्स के साथ<br />अपने भविष्य का सही चुनाव करें
            </h2>
            <p className="facility-description">
              सही करियर चुनना जीवन का सबसे महत्वपूर्ण निर्णयों में से एक है।
              हमारे अनुभवी करियर काउंसलर्स आपको आपकी रुचि, योग्यता और लक्ष्य के अनुसार
              उपयुक्त कोर्स और करियर पथ चुनने में व्यक्तिगत मार्गदर्शन देते हैं।
            </p>
            <p className="facility-description secondary">
              10वीं, 12वीं और ग्रेजुएशन के बाद क्या करें? सरकारी और प्राइवेट दोनों सेक्टर में
              बेहतर अवसरों की जानकारी अब एक ही जगह पर।
            </p>

            <div className="facility-courses">
              <h3>उपलब्ध पाठ्यक्रम</h3>
              <div className="facility-courses-grid">
                <span className="course-pill">PGDCA</span>
                <span className="course-pill">BBA / MBA</span>
                <span className="course-pill">ANM / GNM</span>
                <span className="course-pill">BLIS / MLIS</span>
                <span className="course-pill">BA / MA</span>
                <span className="course-pill">BCA / MCA</span>
                <span className="course-pill">ITI Courses</span>
                <span className="course-pill">DAPRI</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fullscreen-course-section">
          <div className="fullscreen-image-wrapper anm-image-wrapper">
            <img
              src="/Images/WhatsApp Image 2026-01-24 at 19.48.01.jpeg"
              alt="ANM course practical training"
              className="fullscreen-image"
              loading="lazy"
            />
          </div>
          <div className="anm-content">
            <h2 className="anm-title">
              ANM (Auxiliary Nurse Midwifery)<br />कोर्स क्यों करें?
            </h2>
            <p className="anm-description">
              स्वास्थ्य सेवा क्षेत्र में करियर बनाना चाहने वाली बेटियों के लिए ANM एक बेहतरीन कोर्स है।
              इस कोर्स के बाद आप अस्पताल, नर्सिंग होम, क्लीनिक, हेल्थ सेंटर और सरकारी योजनाओं में
              सम्मानजनक व सुरक्षित करियर बना सकती हैं।
            </p>
            <p className="anm-description secondary">
              ANM के माध्यम से आप समाज की सेवा करते हुए आर्थिक रूप से आत्मनिर्भर बन सकती हैं और
              भविष्य में GNM, B.Sc Nursing जैसे उच्च स्तरीय कोर्सेस के लिए भी अपना मार्ग तैयार कर सकती हैं।
            </p>
            <div className="anm-benefits">
              <h3>ANM कोर्स के प्रमुख लाभ</h3>
              <div className="anm-benefits-grid">
                <span className="benefit-pill">सरकारी व प्राइवेट जॉब के अवसर</span>
                <span className="benefit-pill">ग्रामीण व शहरी दोनों क्षेत्रों में उच्च मांग</span>
                <span className="benefit-pill">मातृ एवं शिशु स्वास्थ्य में विशेष योगदान</span>
                <span className="benefit-pill">कम अवधि में प्रोफेशनल करियर की शुरुआत</span>
                <span className="benefit-pill">आगे नर्सिंग के उच्च कोर्सेस के लिए मजबूत आधार</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Badge Section */}
      <section className="certifications-badge-section">
        <div className="container">
          <h2 className="section-title">Recognized Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-badge-card">
              <div className="cert-icon">🏛️</div>
              <h3>NIELIT</h3>
              <p>BCC & CCC Approved</p>
              <span className="cert-badge">Government Recognized</span>
            </div>
            <div className="cert-badge-card">
              <div className="cert-icon">⭐</div>
              <h3>ISO 9001:2008</h3>
              <p>Quality Certified</p>
              <span className="cert-badge">International Standard</span>
            </div>
            <div className="cert-badge-card">
              <div className="cert-icon">🇮🇳</div>
              <h3>Digital India</h3>
              <p>NDLM Program</p>
              <span className="cert-badge">Govt. Initiative</span>
            </div>
            <div className="cert-badge-card">
              <div className="cert-icon">📚</div>
              <h3>Ministry of HRD</h3>
              <p>Recognized Institute</p>
              <span className="cert-badge">Education Dept.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from experienced instructors with industry expertise</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Modern Curriculum</h3>
              <p>Up-to-date courses aligned with industry requirements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Certifications</h3>
              <p>Recognized certificates to boost your career</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Training</h3>
              <p>Hands-on practice with real-world projects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Career Support</h3>
              <p>Guidance and placement assistance for students</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>ISO Certified</h3>
              <p>Quality education standards maintained</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3>Career & Education Consultancy</h3>
              <p>Personalised counselling to select the right course, university and long-term career path</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Technology Showcase */}
      <section className="it-showcase-section">
        <div className="container">
          <h2 className="section-title">Technology We Teach</h2>
          <div className="tech-showcase">
            <div className="tech-category">
              <div className="tech-icon-large">💻</div>
              <h3>Computer Basics</h3>
              <div className="tech-items">
                <span className="tech-badge">Windows</span>
                <span className="tech-badge">MS Office</span>
                <span className="tech-badge">Internet</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-icon-large">⚙️</div>
              <h3>Programming</h3>
              <div className="tech-items">
                <span className="tech-badge">C/C++</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">VB.NET</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-icon-large">🌐</div>
              <h3>Web Development</h3>
              <div className="tech-items">
                <span className="tech-badge">HTML/CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">ASP</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-icon-large">🎨</div>
              <h3>Design & Graphics</h3>
              <div className="tech-items">
                <span className="tech-badge">Photoshop</span>
                <span className="tech-badge">CorelDraw</span>
                <span className="tech-badge">DTP</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-icon-large">🔧</div>
              <h3>Hardware & Network</h3>
              <div className="tech-items">
                <span className="tech-badge">Hardware</span>
                <span className="tech-badge">Networking</span>
                <span className="tech-badge">Repair</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-icon-large">📱</div>
              <h3>Mobile Technology</h3>
              <div className="tech-items">
                <span className="tech-badge">Mobile Repair</span>
                <span className="tech-badge">Software</span>
                <span className="tech-badge">Hardware</span>
              </div>
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

          {/* Award Ceremony */}
          <div className="image-detail-card reverse">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of successful students who have transformed their careers with us</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Started</Link>
              <Link to="/courses" className="btn btn-outline btn-large">View Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


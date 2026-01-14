import { useState } from 'react'
import './Courses.css'

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // All courses from JSON data
  const allCourses = [
    // Basic Computer Courses
    {
      id: 1,
      category: 'basic',
      title: 'Basic Computer Course (BCC)',
      duration: '2 Months',
      description: 'Learn computer fundamentals and basic operations.',
      features: ['Computer Fundamentals', 'Windows', 'MS Word', 'MS Paint']
    },
    {
      id: 2,
      category: 'basic',
      title: 'Course on Computer Concepts (CCC)',
      duration: '3 Months',
      description: 'Comprehensive computer concepts and office tools.',
      features: ['Computer Fundamentals', 'Internet', 'Office Tools']
    },
    // Microsoft Certifications
    {
      id: 3,
      category: 'microsoft',
      title: 'Microsoft Word Specialist (MWS)',
      duration: '1 Month',
      description: 'Master Microsoft Word with advanced features.',
      features: ['Document Formatting', 'Templates', 'Mail Merge', 'Advanced Editing']
    },
    {
      id: 4,
      category: 'microsoft',
      title: 'Microsoft Excel Specialist (MES)',
      duration: '1 Month',
      description: 'Excel in data analysis and spreadsheet management.',
      features: ['Excel Formulas', 'Data Analysis', 'Charts & Graphs', 'Pivot Tables']
    },
    {
      id: 5,
      category: 'microsoft',
      title: 'Microsoft PowerPoint Specialist (MPS)',
      duration: '1 Month',
      description: 'Create professional presentations with PowerPoint.',
      features: ['Slide Design', 'Animations', 'Transitions', 'Master Slides']
    },
    // Certificate Courses
    {
      id: 6,
      category: 'certificate',
      title: 'Certificate in Computer Fundamentals',
      duration: '2 Months',
      description: 'Foundation course in computer basics.',
      features: ['Computer Basics', 'Operating System', 'File Management']
    },
    {
      id: 7,
      category: 'certificate',
      title: 'Certificate in Computer Basic Course with Training (CBCT)',
      duration: '6 Months',
      description: 'Comprehensive basic computer training with hands-on practice.',
      features: ['Computer Basics', 'MS Office', 'Practical Training', 'Projects']
    },
    {
      id: 8,
      category: 'certificate',
      title: 'Certificate in Financial Accounts (CFA)',
      duration: '3 Months',
      description: 'Learn financial accounting and taxation.',
      features: ['Tally', 'Basics of Accounting', 'Taxation']
    },
    {
      id: 9,
      category: 'certificate',
      title: 'Certificate in Computer Application (CCA)',
      duration: '6 Months',
      description: 'Comprehensive computer applications course.',
      features: ['MS Office Suite', 'Internet', 'Email', 'File Management']
    },
    {
      id: 10,
      category: 'certificate',
      title: 'Certificate in Desk Top Publishing (DTP)',
      duration: '3 Months',
      description: 'Learn desktop publishing and design.',
      features: ['PageMaker', 'Design Principles', 'Layout Design']
    },
    // Diploma Courses
    {
      id: 11,
      category: 'diploma',
      title: 'Diploma in Computer Application (DCA)',
      duration: '6 Months',
      description: 'Comprehensive diploma in computer applications.',
      features: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Internet']
    },
    {
      id: 12,
      category: 'diploma',
      title: 'Diploma in Desk Top Publishing (DDTP)',
      duration: '6 Months',
      description: 'Master desktop publishing tools and techniques.',
      features: ['Photoshop', 'CorelDraw', 'Pagemaker']
    },
    {
      id: 13,
      category: 'diploma',
      title: 'Diploma in Data Entry (DDE)',
      duration: '6 Months',
      description: 'Professional data entry and typing skills.',
      features: ['Typing Skills', 'Data Entry', 'Accuracy Training']
    },
    {
      id: 14,
      category: 'diploma',
      title: 'Advance Diploma in Computer Application (ADCA)',
      duration: '12 Months',
      description: 'Advanced diploma covering multiple computer applications.',
      features: ['MS Office', 'HTML', 'Photoshop', 'Tally', 'Internet', 'Hardware Overview']
    },
    // Software Courses
    {
      id: 15,
      category: 'software',
      title: 'Diploma in Software Technology (DST)',
      duration: '6 Months',
      description: 'Learn programming languages and software development.',
      features: ['C Programming', 'C++ Programming', 'Java', 'VB.NET']
    },
    {
      id: 16,
      category: 'software',
      title: 'Advance Diploma in Software Technology (ADST)',
      duration: '12 Months',
      description: 'Advanced software development and programming.',
      features: ['Advanced Programming', 'Data Structures', 'Algorithms', 'Project Development']
    },
    // Website & IT Courses
    {
      id: 17,
      category: 'web',
      title: 'Certificate in Website Designing',
      duration: '6 Months',
      description: 'Learn to design beautiful and functional websites.',
      features: ['HTML', 'CSS', 'JavaScript', 'Photoshop']
    },
    {
      id: 18,
      category: 'web',
      title: 'Diploma in Website Designing (DWD)',
      duration: '12 Months',
      description: 'Comprehensive web design and development diploma.',
      features: ['HTML', 'CSS', 'JavaScript', 'ASP', 'CorelDraw', 'InDesign', 'Live Project']
    },
    // Hardware & Networking
    {
      id: 19,
      category: 'hardware',
      title: 'Certificate in Computer Hardware (CCH)',
      duration: '3 Months',
      description: 'Learn computer hardware fundamentals and troubleshooting.',
      features: ['Hardware Components', 'Assembly', 'Troubleshooting', 'Maintenance']
    },
    {
      id: 20,
      category: 'hardware',
      title: 'Diploma in Computer Hardware (DCH)',
      duration: '6 Months',
      description: 'Comprehensive hardware and system administration.',
      features: ['Hardware Installation', 'System Configuration', 'Repair', 'Networking Basics']
    },
    {
      id: 21,
      category: 'hardware',
      title: 'Advance Diploma in Hardware & Networking (ADCHN)',
      duration: '12 Months',
      description: 'Advanced hardware and networking expertise.',
      features: ['Advanced Hardware', 'Network Configuration', 'Server Management', 'Security']
    },
    {
      id: 22,
      category: 'hardware',
      title: 'Certificate in Computer Networking (CCN)',
      duration: '3 Months',
      description: 'Learn computer networking fundamentals.',
      features: ['Network Basics', 'Configuration', 'Troubleshooting']
    },
    // Mobile Repairing
    {
      id: 23,
      category: 'mobile',
      title: 'Certificate in Mobile Repairing (CMRC)',
      duration: '3 Months',
      description: 'Learn mobile phone repair and maintenance.',
      features: ['Mobile Components', 'Repair Techniques', 'Troubleshooting', 'Software Installation']
    },
    {
      id: 24,
      category: 'mobile',
      title: 'Diploma in Mobile Repairing (DMRC)',
      duration: '6 Months',
      description: 'Comprehensive mobile repair and servicing.',
      features: ['Advanced Repair', 'Component Replacement', 'Software Solutions', 'Business Skills']
    },
    // Training Programs
    {
      id: 25,
      category: 'training',
      title: 'Computer Teacher Training Course',
      duration: '12 Months',
      description: 'Become a certified computer teacher.',
      features: ['Teaching Methods', 'Curriculum Design', 'Student Assessment', 'Practical Training']
    },
    {
      id: 26,
      category: 'training',
      title: 'ADCA with Teaching Training',
      duration: '18 Months',
      description: 'Advanced diploma with teaching certification.',
      features: ['ADCA Course', 'Teaching Training', 'Certification']
    },
    {
      id: 27,
      category: 'training',
      title: 'DCA with Teaching Training',
      duration: '9 Months',
      description: 'Diploma in computer applications with teaching skills.',
      features: ['DCA Course', 'Teaching Methods', 'Practical Training']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Courses', icon: '📚' },
    { id: 'basic', name: 'Basic Courses', icon: '💻' },
    { id: 'microsoft', name: 'Microsoft', icon: '📄' },
    { id: 'certificate', name: 'Certificates', icon: '📜' },
    { id: 'diploma', name: 'Diplomas', icon: '🎓' },
    { id: 'software', name: 'Software', icon: '⚙️' },
    { id: 'web', name: 'Web Design', icon: '🌐' },
    { id: 'hardware', name: 'Hardware', icon: '🔧' },
    { id: 'mobile', name: 'Mobile Repair', icon: '📱' },
    { id: 'training', name: 'Training', icon: '👨‍🏫' }
  ]

  const getCategoryIcon = (category) => {
    const categoryMap = {
      'basic': '💻',
      'microsoft': '📄',
      'certificate': '📜',
      'diploma': '🎓',
      'software': '⚙️',
      'web': '🌐',
      'hardware': '🔧',
      'mobile': '📱',
      'training': '👨‍🏫'
    }
    return categoryMap[category] || '📚'
  }

  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory)

  return (
    <div className="courses">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <h1 className="hero-title-animated">Our Courses</h1>
          <p className="hero-subtitle">Comprehensive Computer Education Programs</p>
          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-number">27+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">10</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'All Available Courses' : `${categories.find(c => c.id === selectedCategory)?.name} Courses`}
            </h2>
            <p className="courses-count">{filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available</p>
          </div>
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="course-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="course-header">
                  <div className="course-icon">
                    {getCategoryIcon(course.category)}
                  </div>
                  <span className="course-duration">{course.duration}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-features">
                  <h4>Course Contents:</h4>
                  <ul>
                    {course.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="course-btn">
                  <span>Enroll Now</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Overview */}
      <section className="course-categories-section">
        <div className="container">
          <h2 className="section-title">Course Categories</h2>
          <div className="categories-overview">
            {categories.filter(c => c.id !== 'all').map((category, index) => {
              const categoryCourses = allCourses.filter(c => c.category === category.id)
              return (
                <div 
                  key={category.id} 
                  className="category-overview-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="category-icon-large">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p className="category-count">{categoryCourses.length} {categoryCourses.length === 1 ? 'Course' : 'Courses'}</p>
                  <button 
                    className="view-category-btn"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    View Courses
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Join our courses and take the first step towards a successful career in IT</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Contact Us</button>
              <button className="btn btn-outline btn-large">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses

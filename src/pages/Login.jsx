import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [activeTab, setActiveTab] = useState('student')
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log(`${activeTab} login:`, formData)
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login functionality will be implemented here`)
    // Reset form
    setFormData({
      username: '',
      password: ''
    })
  }

  return (
    <div className="login">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="container">
          <h1>Login Portal</h1>
          <p className="hero-subtitle">Access Your Account</p>
        </div>
      </section>

      {/* Login Section */}
      <section className="login-section">
        <div className="container">
          <div className="login-wrapper">
            {/* Tab Selection */}
            <div className="login-tabs">
              <button
                className={`tab-btn ${activeTab === 'student' ? 'active' : ''}`}
                onClick={() => setActiveTab('student')}
              >
                <span className="tab-icon">👨‍🎓</span>
                Student Login
              </button>
              <button
                className={`tab-btn ${activeTab === 'mentor' ? 'active' : ''}`}
                onClick={() => setActiveTab('mentor')}
              >
                <span className="tab-icon">👨‍🏫</span>
                Mentor Login
              </button>
              <button
                className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
                onClick={() => setActiveTab('admin')}
              >
                <span className="tab-icon">👤</span>
                Admin Login
              </button>
            </div>

            {/* Login Form */}
            <div className="login-card">
              <div className="login-header">
                <h2>
                  {activeTab === 'student' && '👨‍🎓 Student Portal'}
                  {activeTab === 'mentor' && '👨‍🏫 Mentor Portal'}
                  {activeTab === 'admin' && '👤 Admin Portal'}
                </h2>
                <p>Welcome back! Please login to continue.</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">
                    {activeTab === 'admin' ? 'Admin ID' : 'Username'}
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder={`Enter your ${activeTab === 'admin' ? 'Admin ID' : 'username'}`}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>

              <div className="login-footer">
                {activeTab === 'student' && (
                  <p>
                    New student? <a href="#">Register here</a>
                  </p>
                )}
                {activeTab === 'mentor' && (
                  <p>
                    Need mentor access? <a href="#">Contact Admin</a>
                  </p>
                )}
                {activeTab === 'admin' && (
                  <p>
                    Admin access is restricted. Contact system administrator for assistance.
                  </p>
                )}
              </div>
            </div>

            {/* Info Cards */}
            <div className="login-info">
              <div className="info-card">
                <div className="info-icon">🔒</div>
                <h3>Secure Login</h3>
                <p>Your data is protected with industry-standard security measures</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h3>Quick Access</h3>
                <p>Access your dashboard and resources instantly after login</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>24/7 Available</h3>
                <p>Login anytime, anywhere with our responsive platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login


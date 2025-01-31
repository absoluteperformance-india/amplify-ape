import { useState, useEffect } from 'react'
import './App.css'
import apelogo_new from './assets/ape_new.png'
import apeLogo from './assets/ape_logo.png'
import motulLogo from './assets/motul_logo.png'
import maximaLogo from './assets/maxima_logo.png'
import idemitsuLogo from './assets/idemitsu_logo.png'
import wurthLogo from './assets/wurth_logo.png'
import valvolineLogo from './assets/valvoline_logo.png'
import bespokeServices from './assets/bespoke_services.webp'
import performanceFabrication from './assets/performance_fabrication.webp'
import superbikeservices from './assets/superbikeservices.webp'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: ''
  })

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    setShowContactDialog(false)
    setFormData({ name: '', phone: '', email: '', query: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    // Loading timer
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isLoading ? (
        // Loading screen
        <div className="loading-screen">
          <h1 className="loading-text">ABSOLUTE PERFORMANCE & ENGINEERING</h1>
          <div className="loading-bar"></div>
        </div>
      ) : (
        // Main content
        <div className="main-container">
          {/* Navigation Bar */}
          <nav className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
              <img src={apeLogo} alt="APE" className="nav-logo" />
            </div>
            <div className="nav-links">
              <a href="#services" className="nav-link" style={{ color: 'white' }} onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
              }}>OUR SERVICES</a>
              <a href="#partners" className="nav-link" style={{ color: 'white' }} onClick={(e) => {
                e.preventDefault();
                document.querySelector('#partners').scrollIntoView({ behavior: 'smooth' });
              }}>BRANDS</a>
              <a href="#contact" className="nav-link" style={{ color: 'white' }} onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}>CONTACT</a>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="hero">
            <div className="hero-container">
              {[
                {
                  image: bespokeServices,
                  text: "BESPOKE VEHICLE SERVICE",
                },
                {
                  image: performanceFabrication,
                  text: "CUSTOM PERFORMANCE COMPONENTS FABRICATION",
                },
                {
                  image: superbikeservices,
                  text: "SUPERBIKE ACCESSORIES & SERVICES",
                }
              ].map((item, index) => (
                <div key={index} className="hero-content">
                  <div className="image-wrapper">
                    <img 
                      src={item.image} 
                      alt="ABSOLUTE PERFORMANCE & ENGINEERING" 
                      className="hero-image fade-in" 
                    />
                  </div>
                  <p className="fade-in-delay">{item.text}</p>
                  <button className="cta-button">EXPLORE NOW</button>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="services">
            <h2 className="section-title modern-title">OUR SERVICES</h2>
            <div className="service-grid">
              <div className="service-card">
                <h3 className="service-heading">Performance Tuning</h3>
                <p className="service-text">ECU remapping, dyno tuning, and power optimization for supercars & performance bikes</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Race Preparation</h3>
                <p className="service-text">Track-focused modifications, safety upgrades, and competition setup</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">4x4 Specialists</h3>
                <p className="service-text">Off-road modifications, lift kits, and terrain-specific optimization</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Precision Maintenance</h3>
                <p className="service-text">Factory-spec servicing for exotic cars and superbikes</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Custom Fabrication</h3>
                <p className="service-text">Bespoke exhaust systems, roll cages, and chassis modifications</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Performance Parts</h3>
                <p className="service-text">Supply & installation of premium aftermarket components</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Suspension Setup</h3>
                <p className="service-text">Advanced geometry adjustment and custom suspension solutions</p>
              </div>
              <div className="service-card">
                <h3 className="service-heading">Diagnostics</h3>
                <p className="service-text">State-of-the-art fault finding and performance analysis</p>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section id="partners" className="partners">
            <h2 className="section-title">BRANDS AVAILABLE</h2>
            <div className="partner-logos">
              {[motulLogo, maximaLogo, idemitsuLogo, wurthLogo, valvolineLogo].map((logo, index) => (
                <div key={index} className="partner-logo">
                  <div className="logo-container">
                    <img src={logo} alt={`Partner ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <div className="contact-content">
              <h2>GET IN TOUCH</h2>
              <p>Ready to elevate your ride?</p>
              <button 
                className="contact-button glow-on-hover"
                onClick={() => setShowContactDialog(true)}
              >
                CONTACT US
              </button>
            </div>
          </section>

          {/* Contact Dialog */}
          {showContactDialog && (
            <div className="dialog-overlay">
              <div className="dialog-content">
                <button 
                  className="dialog-close"
                  onClick={() => setShowContactDialog(false)}
                >
                  ×
                </button>
                <h2>Contact Us</h2>
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="query"
                      placeholder="Your Query"
                      value={formData.query}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-button glow-on-hover">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Add blank space */}
          <div className="blank-space"></div>
        </div>
      )}
    </>
  )
}

export default App

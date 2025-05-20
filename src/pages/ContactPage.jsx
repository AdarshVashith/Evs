import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // You would normally send this data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="bg-bharat-green-500 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We're here to help with any questions or concerns about our electric vehicles and services.
          </p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FiMapPin className="w-6 h-6 text-bharat-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 EV Street, Sector 5<br />
                      Gurugram, Haryana 122001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FiMail className="w-6 h-6 text-bharat-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">info@bharatevs.com</p>
                    <p className="text-gray-600">support@bharatevs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FiPhone className="w-6 h-6 text-bharat-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FiClock className="w-6 h-6 text-bharat-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-bharat-green-100 transition-colors duration-300">
                    <FiFacebook className="w-5 h-5 text-bharat-green-500" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-bharat-green-100 transition-colors duration-300">
                    <FiTwitter className="w-5 h-5 text-bharat-green-500" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-bharat-green-100 transition-colors duration-300">
                    <FiInstagram className="w-5 h-5 text-bharat-green-500" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-bharat-green-100 transition-colors duration-300">
                    <FiLinkedin className="w-5 h-5 text-bharat-green-500" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="input-field"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn btn-primary w-full">
                        Send Message
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-bharat-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        })
                      }}
                      className="btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us on the Map</h2>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            {/* In a real implementation, you would use a proper map component like react-leaflet */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our electric vehicles and services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">What types of EVs do you service?</h3>
              <p className="text-gray-600">
                We service all types of electric vehicles including 2-wheelers (scooters, bikes), 3-wheelers (auto-rickshaws, delivery vehicles), and provide specialized battery services for all EV models.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">How long does a typical service take?</h3>
              <p className="text-gray-600">
                The service duration depends on the type of service required. Basic diagnostics and minor repairs typically take 2-3 hours, while comprehensive services might take a full day. For major repairs, we'll provide a specific timeline after diagnosis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Do you offer doorstep service?</h3>
              <p className="text-gray-600">
                Yes, we offer doorstep service for basic maintenance and minor repairs in select locations. For comprehensive services that require specialized equipment, we recommend bringing your vehicle to our service center.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">What warranty do you provide on repairs?</h3>
              <p className="text-gray-600">
                We provide a 3-month warranty on all repairs and services performed at our centers. For battery replacements and major component installations, the warranty extends to 12 months or as per the manufacturer's warranty terms.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-bharat-green-500 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our customer support team is available to help you with any queries about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:+919876543210" className="btn bg-white text-bharat-green-500 hover:bg-gray-100">
              Call Now
            </a>
            <a href="mailto:support@bharatevs.com" className="btn border border-white text-white hover:bg-bharat-green-600">
              Email Support
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage
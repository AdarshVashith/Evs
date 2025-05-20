import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-bharat-green-500 mb-4">BHARAT EVs</h3>
            <p className="text-gray-600 mb-4">Leading the electric vehicle revolution in India with innovative and sustainable transportation solutions.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/category" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Products</Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/battery-service" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Battery Service</Link>
              </li>
              <li>
                <Link to="/category/vehicle-service" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Vehicle Service</Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Maintenance</Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-600 hover:text-bharat-green-500 transition-colors duration-300">Repairs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-bharat-green-500" />
                <span className="text-gray-600">123 EV Street, Sector 5, Gurugram, Haryana 122001</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-bharat-green-500" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-bharat-green-500" />
                <span className="text-gray-600">info@bharatevs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} BHARAT EVs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
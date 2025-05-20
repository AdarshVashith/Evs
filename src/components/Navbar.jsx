import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-bharat-green-500">BHARAT EVs</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }>
              About Us
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }>
              Category
            </NavLink>
            <NavLink to="/service" className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }>
              Service
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'nav-link-active' : 'nav-link'
            }>
              Contact Us
            </NavLink>
            <NavLink to="/signin" className="btn btn-primary text-sm">
              Sign In
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/category" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                Category
              </NavLink>
              <NavLink 
                to="/service" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                Service
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link-active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
              <NavLink 
                to="/signin" 
                className="btn btn-primary inline-block text-center"
                onClick={closeMenu}
              >
                Sign In
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
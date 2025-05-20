import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const HeroSection = () => {
  useEffect(() => {
    const handleScrollClick = () => {
      const nextSection = document.getElementById('about-section')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollButton = document.getElementById('scroll-button')
    if (scrollButton) {
      scrollButton.addEventListener('click', handleScrollClick)
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener('click', handleScrollClick)
      }
    }
  }, [])

  return (
    <div className="relative hero-section bg-hero-pattern">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Future of Mobility is Electric
          </h1>
          <p className="text-xl text-white mb-8">
            Experience the power of sustainability with BHARAT EVs. 
            Join the green revolution with our cutting-edge electric vehicles and services.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/category" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/service" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        id="scroll-button"
      >
        <div className="flex flex-col items-center">
          <p className="text-white mb-2">Scroll to explore</p>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-1 bg-white rounded-full"></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection
import { motion } from 'framer-motion'

const AboutPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BHARAT EVs</h1>
          <p className="text-xl max-w-3xl">
            Pioneering the electric vehicle revolution in India with sustainable and innovative mobility solutions.
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, BHARAT EVs emerged from a vision to revolutionize transportation in India through sustainable electric mobility solutions. Our founders recognized the urgent need to address growing environmental concerns while meeting the transportation demands of a rapidly developing nation.
              </p>
              <p className="text-gray-700 mb-4">
                Starting with a small team of engineers and EV enthusiasts, we have grown into a comprehensive electric vehicle company offering 2-wheelers, 3-wheelers, and specialized battery services. Our journey has been driven by innovation, quality, and a commitment to accelerating India's transition to clean energy.
              </p>
              <p className="text-gray-700">
                Today, BHARAT EVs stands at the forefront of the electric revolution, with a nationwide presence and a growing community of satisfied customers who share our passion for sustainable transportation.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://www.scb.co.th/content/media/personal-banking/stories-tips/ev-trend/ev2.jpg"
                alt="BHARAT EVs history"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-bharat-green-400 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Since</p>
                <p>2025</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-bharat-green-100 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-bharat-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To accelerate India's transition to sustainable energy through affordable, high-performance electric vehicles and comprehensive battery services, while building a nationwide infrastructure to support the electric mobility ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-bharat-green-100 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-bharat-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a future where electric vehicles are the standard for all transportation in India, eliminating carbon emissions, reducing dependence on fossil fuels, and making clean mobility accessible to everyone, from urban centers to rural communities.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            These principles guide every decision we make and every product we develop.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly push the boundaries of what's possible in electric mobility, developing new technologies and solutions to make EVs more efficient, affordable, and accessible.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Sustainability</h3>
              <p className="text-gray-700">
                Environmental responsibility is at the heart of everything we do. We're committed to reducing carbon emissions and creating products that minimize ecological impact.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Quality</h3>
              <p className="text-gray-700">
                We never compromise on the quality of our vehicles and services. Every product undergoes rigorous testing to ensure safety, reliability, and performance.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Customer-Centric</h3>
              <p className="text-gray-700">
                Our customers are our priority. We listen to feedback, anticipate needs, and strive to provide exceptional service and support throughout the ownership experience.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Accessibility</h3>
              <p className="text-gray-700">
                We believe that electric mobility should be for everyone. We work to make our products affordable and our services available throughout India.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-bharat-green-500 mb-3">Transparency</h3>
              <p className="text-gray-700">
                We operate with honesty and integrity in all aspects of our business, from pricing to performance claims, building trust with our customers and partners.
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
          <h2 className="text-3xl font-bold mb-6">Join the Electric Revolution</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience the future of mobility with BHARAT EVs. Explore our product range or schedule a service today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/category" className="btn bg-white text-bharat-green-500 hover:bg-gray-100">
              View Products
            </a>
            <a href="/contact" className="btn border border-white text-white hover:bg-bharat-green-600">
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import CategoryCard from '../components/CategoryCard'
import ServiceCard from '../components/ServiceCard'

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const categories = [
    {
      id: 1,
      title: '2-Wheelers',
      description: 'Eco-friendly electric scooters and bikes for urban commuting with cutting-edge technology.',
      image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/10/2241009eng/2241009eng_01.jpg',
      link: '/category'
    },
    {
      id: 2,
      title: '3-Wheelers',
      description: 'Powerful electric auto-rickshaws and delivery vehicles for commercial and passenger transport.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301011384/ML/OB/WR/50896740/euler-hiload-ev-full-open-body-cargo-auto-three-wheeler-commercial-vehicle.png',
      link: '/category'
    },
    {
      id: 3,
      title: 'Battery Services',
      description: 'Expert battery maintenance, diagnostics and repair services for all types of EV batteries.',
      image: 'https://www.automotivepowertraintechnologyinternational.com/wp-content/uploads/2022/09/IONETIC-rendering-1-e1662464875437.png',
      link: '/category'
    }
  ]

  const services = [
    {
      id: 1,
      title: 'Battery Service',
      description: 'Complete diagnostics and repair services for all types of EV batteries.',
      image: 'https://images.pexels.com/photos/6870391/pexels-photo-6870391.jpeg',
      features: [
        'Battery health check',
        'Cell balancing & optimization',
        'Repair and reconditioning',
        'Preventive maintenance'
      ]
    },
    {
      id: 2,
      title: 'Vehicle Service',
      description: 'Comprehensive maintenance and repair for all electric vehicles.',
      image: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg',
      features: [
        'Full vehicle diagnostics',
        'Motor and controller check',
        'Brake system service',
        'Software updates'
      ]
    },
    {
      id: 3,
      title: 'Emergency Support',
      description: '24/7 roadside assistance for all your EV emergencies.',
      image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg',
      features: [
        'Roadside battery charging',
        'Emergency repairs',
        'Towing services',
        'Remote diagnostics'
      ]
    }
  ]
  
  return (
    <>
      <HeroSection />
      
      {/* About Section with ID for scroll target */}
      <motion.section 
        id="about-section"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Revolutionizing Electric Mobility</h2>
          <p className="section-subtitle">
            At BHARAT EVs, we're committed to leading the electric vehicle revolution in India with innovative technology and sustainable solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                We envision a future where clean, efficient electric transportation is accessible to everyone. 
                Our mission is to accelerate the transition to sustainable energy through affordable and high-performance electric vehicles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bharat-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zero-emission transportation solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bharat-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced battery technology and servicing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bharat-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Nationwide service network</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://www.scb.co.th/content/media/personal-banking/stories-tips/ev-trend/ev2.jpg" 
                alt="Electric vehicle charging" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-bharat-green-400 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">100%</p>
                <p>Electric</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Categories Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Explore Our Categories</h2>
          <p className="section-subtitle">
            Browse through our range of electric vehicles and services designed for different needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map(category => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Services Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive services to keep your electric vehicles running at peak performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-ev-pattern bg-fixed bg-cover bg-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Go Electric?</h2>
            <p className="text-xl text-white mb-8">
              Join thousands of satisfied customers who have made the switch to electric vehicles. 
              Experience the future of transportation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/category" className="btn btn-primary">
                View Products
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default HomePage
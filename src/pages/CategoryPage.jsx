import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiBatteryCharging, FiTool } from 'react-icons/fi'

const CategoryPage = () => {
  const categories = [
    {
      id: 1,
      title: '2-Wheelers',
      description: 'Eco-friendly electric scooters and bikes for urban commuting with cutting-edge technology.',
      image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/10/2241009eng/2241009eng_01.jpg',
      link: '/category/two-wheelers'
    },
    {
      id: 2,
      title: '3-Wheelers',
      description: 'Powerful electric auto-rickshaws and delivery vehicles for commercial and passenger transport.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301011384/ML/OB/WR/50896740/euler-hiload-ev-full-open-body-cargo-auto-three-wheeler-commercial-vehicle.png',
      link: '/category/three-wheelers'
    },
    {
      id: 3,
      title: 'Battery Services',
      description: 'Expert battery maintenance, diagnostics and repair services for all types of EV batteries.',
      image: 'https://www.automotivepowertraintechnologyinternational.com/wp-content/uploads/2022/09/IONETIC-rendering-1-e1662464875437.png',
      link: '/category/battery-service'
    }
  ]

  const services = [
    {
      id: 1,
      title: 'Battery Service',
      description: 'Complete diagnostics and repair services for all types of EV batteries.',
      icon: <FiBatteryCharging className="w-12 h-12 text-bharat-green-500" />,
      link: '/category/battery-service'
    },
    {
      id: 2,
      title: 'Vehicle Service',
      description: 'Comprehensive maintenance and repair services for all electric vehicles.',
      icon: <FiTool className="w-12 h-12 text-bharat-green-500" />,
      link: '/category/vehicle-service'
    }
  ]

  return (
    <div className="pt-20">
      <motion.section
        className="bg-bharat-green-500 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Categories</h1>
          <p className="text-xl max-w-3xl">
            Explore our range of electric vehicles and specialized service options designed to meet your mobility needs.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Electric Vehicles</h2>
          <p className="section-subtitle">
            Our range of electric vehicles combines performance, reliability, and style for a sustainable future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map(category => (
              <Link key={category.id} to={category.link}>
                <motion.div 
                  className="card overflow-hidden group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gray-50"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map(service => (
              <Link key={service.id} to={service.link}>
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-md"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default CategoryPage
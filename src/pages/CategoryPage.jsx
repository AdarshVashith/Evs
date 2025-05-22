import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiBatteryCharging, FiTool } from 'react-icons/fi'

const CategoryPage = () => {
  const categories = [
 
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
      >
        <div className="container mx-auto px-4">
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

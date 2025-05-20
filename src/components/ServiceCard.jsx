import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const ServiceCard = ({ title, description, features, image }) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-auto">
          <h4 className="font-medium mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="text-bharat-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
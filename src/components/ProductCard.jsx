import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, description, image, specs, price }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="w-24 font-medium">{spec.label}:</span>
              <span className="text-gray-600">{spec.value}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-bharat-green-500">₹{price.toLocaleString()}</span>
          <Link to="/contact" className="btn btn-primary">
            Enquire Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
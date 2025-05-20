import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CategoryCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
      className="card overflow-hidden group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-bharat-green-500 font-medium hover:text-bharat-green-600 transition-colors duration-300"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default CategoryCard
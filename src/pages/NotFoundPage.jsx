import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-bharat-green-500">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-6">Page Not Found</h2>
          <p className="text-gray-600 mt-4">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-8">
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFoundPage
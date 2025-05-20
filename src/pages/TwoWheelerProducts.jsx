import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const TwoWheelerProducts = () => {
  const products = [
    {
      id: 1,
      title: "BHARAT EV Spark",
      description: "Urban electric scooter with advanced features and stylish design",
      image: "https://images.pexels.com/photos/12326583/pexels-photo-12326583.jpeg",
      specs: [
        { label: "Range", value: "120 km" },
        { label: "Top Speed", value: "60 kmph" },
        { label: "Battery", value: "Lithium-ion 2.5 kWh" },
        { label: "Charging", value: "0-80% in 3 hours" }
      ],
      price: 89999
    },
    {
      id: 2,
      title: "BHARAT EV Bolt",
      description: "Performance electric bike for the modern commuter",
      image: "https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg",
      specs: [
        { label: "Range", value: "140 km" },
        { label: "Top Speed", value: "80 kmph" },
        { label: "Battery", value: "Lithium-ion 3.2 kWh" },
        { label: "Charging", value: "0-80% in 2.5 hours" }
      ],
      price: 119999
    },
    {
      id: 3,
      title: "BHARAT EV Swift",
      description: "Compact and efficient electric scooter for daily commute",
      image: "https://images.pexels.com/photos/17798896/pexels-photo-17798896/free-photo-of-electric-scooter-parked-on-sidewalk.jpeg",
      specs: [
        { label: "Range", value: "100 km" },
        { label: "Top Speed", value: "50 kmph" },
        { label: "Battery", value: "Lithium-ion 2.0 kWh" },
        { label: "Charging", value: "0-80% in 3.5 hours" }
      ],
      price: 74999
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">2-Wheeler EVs</h1>
          <p className="text-xl max-w-3xl">
            Discover our range of electric scooters and bikes designed for urban mobility.
          </p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TwoWheelerProducts
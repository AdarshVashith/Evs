import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const ThreeWheelerProducts = () => {
  const products = [
    {
      id: 1,
      title: "BHARAT EV Cargo",
      description: "Electric cargo vehicle for efficient last-mile delivery",
      image: "https://images.pexels.com/photos/15910204/pexels-photo-15910204/free-photo-of-e-rickshaw-on-street.jpeg",
      specs: [
        { label: "Range", value: "150 km" },
        { label: "Payload", value: "500 kg" },
        { label: "Battery", value: "Lithium-ion 7.2 kWh" },
        { label: "Charging", value: "0-80% in 4 hours" }
      ],
      price: 249999
    },
    {
      id: 2,
      title: "BHARAT EV Passenger",
      description: "Comfortable electric auto-rickshaw for passenger transport",
      image: "https://images.pexels.com/photos/17019663/pexels-photo-17019663/free-photo-of-e-rickshaw-parked-on-street.jpeg",
      specs: [
        { label: "Range", value: "130 km" },
        { label: "Capacity", value: "4 passengers" },
        { label: "Battery", value: "Lithium-ion 6.0 kWh" },
        { label: "Charging", value: "0-80% in 3.5 hours" }
      ],
      price: 199999
    },
    {
      id: 3,
      title: "BHARAT EV Loader",
      description: "Heavy-duty electric loader for commercial use",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
      specs: [
        { label: "Range", value: "120 km" },
        { label: "Payload", value: "750 kg" },
        { label: "Battery", value: "Lithium-ion 8.4 kWh" },
        { label: "Charging", value: "0-80% in 4.5 hours" }
      ],
      price: 299999
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">3-Wheeler EVs</h1>
          <p className="text-xl max-w-3xl">
            Explore our range of electric three-wheelers for commercial and passenger transport.
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

export default ThreeWheelerProducts
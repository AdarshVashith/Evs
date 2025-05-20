import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { FiUsers, FiTool, FiClock, FiCheck, FiMapPin } from 'react-icons/fi'

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: 'Battery Service',
      description: 'Comprehensive diagnostics and repair for all types of EV batteries.',
      image: 'https://evclinic.eu/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-25-at-1.54.56-PM.jpeg',
      features: [
        'Complete battery health check',
        'Cell balancing & optimization',
        'Repair and reconditioning',
        'Performance enhancement',
        'Preventive maintenance'
      ],
      link: '/category/battery-service'
    },
    {
      id: 2,
      title: 'Vehicle Service',
      description: 'Full-service maintenance and repair for all electric vehicles.',
      image: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg',
      features: [
        'Comprehensive vehicle diagnostics',
        'Motor and controller check',
        'Brake system inspection',
        'Suspension and steering check',
        'Software updates and calibration'
      ],
      link: '/category/vehicle-service'
    },
    {
      id: 3,
      title: 'Annual Maintenance',
      description: 'Scheduled preventive maintenance to keep your EV in top condition.',
      image: 'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg',
      features: [
        'Regular service intervals',
        'System-wide inspection',
        'Preventive parts replacement',
        'Software updates',
        'Extended warranty options'
      ],
      link: '/category/vehicle-service'
    }
  ]
  
  const engineers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      position: 'Senior EV Technician',
      experience: '8+ years',
      expertise: 'Battery Systems',
      image: 'https://images.pexels.com/photos/8961085/pexels-photo-8961085.jpeg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'EV Diagnostics Expert',
      experience: '6+ years',
      expertise: 'Motor Systems',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      position: 'Lead Service Engineer',
      experience: '10+ years',
      expertise: 'Control Systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ]

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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert EV Service & Maintenance</h1>
            <p className="text-xl mb-8">
              Keep your electric vehicle running at peak performance with our specialized service options.
            </p>
            <Link to="/category" className="btn bg-white text-bharat-green-500 hover:bg-gray-100">
              Book a Service
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Service Features */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Our Service</h2>
          <p className="section-subtitle">
            We provide specialized service for all electric vehicles with expert technicians and state-of-the-art equipment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiUsers className="w-12 h-12 text-bharat-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified EV specialists with extensive training and experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiTool className="w-12 h-12 text-bharat-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art diagnostic tools and repair equipment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiClock className="w-12 h-12 text-bharat-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">
                Efficient service process to get you back on the road quickly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiCheck className="w-12 h-12 text-bharat-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All services backed by our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Options */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Service Options</h2>
          <p className="section-subtitle">
            Choose from our range of specialized service packages tailored to your EV needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map(service => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard {...service} />
                <div className="mt-4 text-center">
                  <Link to={service.link} className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Service Process */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Service Process</h2>
          <p className="section-subtitle">
            We follow a systematic approach to ensure your vehicle receives the best care.
          </p>
          
          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-bharat-green-100 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Initial Diagnosis</h3>
                  <p className="text-gray-600">
                    Our technicians perform a comprehensive diagnostic check to identify any issues with your vehicle.
                  </p>
                </div>
                <div className="md:w-12 relative flex justify-center">
                  <div className="h-12 w-12 bg-bharat-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <img src="https://images.pexels.com/photos/4482932/pexels-photo-4482932.jpeg" alt="Diagnosis" className="rounded-lg shadow-md h-48 w-full object-cover" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center pt-12 md:pt-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                  <img src="https://images.pexels.com/photos/3822850/pexels-photo-3822850.jpeg" alt="Service" className="rounded-lg shadow-md h-48 w-full object-cover" />
                </div>
                <div className="md:w-12 relative flex justify-center order-first md:order-2">
                  <div className="h-12 w-12 bg-bharat-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-last md:order-last">
                  <h3 className="text-xl font-semibold mb-2">Service & Repairs</h3>
                  <p className="text-gray-600">
                    Based on the diagnosis, our experts perform necessary repairs and maintenance with precision.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center pt-12 md:pt-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                  <p className="text-gray-600">
                    After service, we conduct a thorough inspection to ensure everything works perfectly.
                  </p>
                </div>
                <div className="md:w-12 relative flex justify-center">
                  <div className="h-12 w-12 bg-bharat-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <img src="https://images.pexels.com/photos/4489736/pexels-photo-4489736.jpeg" alt="Quality Check" className="rounded-lg shadow-md h-48 w-full object-cover" />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center pt-12 md:pt-24">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                  <img src="https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg" alt="Delivery" className="rounded-lg shadow-md h-48 w-full object-cover" />
                </div>
                <div className="md:w-12 relative flex justify-center order-first md:order-2">
                  <div className="h-12 w-12 bg-bharat-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-last md:order-last">
                  <h3 className="text-xl font-semibold mb-2">Delivery & Support</h3>
                  <p className="text-gray-600">
                    We return your vehicle with a detailed service report and provide ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Our Engineers */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Meet Our Expert Engineers</h2>
          <p className="section-subtitle">
            Our team of certified EV specialists is equipped to handle all your electric vehicle service needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {engineers.map(engineer => (
              <motion.div
                key={engineer.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={engineer.image} 
                    alt={engineer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{engineer.name}</h3>
                  <p className="text-bharat-green-500 font-medium mb-3">{engineer.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Experience:</span>
                      <span>{engineer.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Specialization:</span>
                      <span>{engineer.expertise}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Service Locations */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Service Centers</h2>
          <p className="section-subtitle">
            Visit one of our service centers conveniently located across major cities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <FiMapPin className="text-bharat-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Delhi NCR</h3>
                  <p className="text-gray-600">123 EV Street, Sector 5, Gurugram, Haryana 122001</p>
                  <p className="text-gray-600 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <FiMapPin className="text-bharat-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Mumbai</h3>
                  <p className="text-gray-600">456 Electric Avenue, Andheri East, Mumbai, Maharashtra 400069</p>
                  <p className="text-gray-600 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <FiMapPin className="text-bharat-green-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Bangalore</h3>
                  <p className="text-gray-600">789 Tech Park, Whitefield, Bangalore, Karnataka 560066</p>
                  <p className="text-gray-600 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">+91 98765 43212</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn btn-primary">
              Find Nearest Center
            </Link>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule your appointment today and experience the BHARAT EVs difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/category/battery-service" className="btn bg-white text-bharat-green-500 hover:bg-gray-100">
              Battery Service
            </Link>
            <Link to="/category/vehicle-service" className="btn border border-white text-white hover:bg-bharat-green-600">
              Vehicle Service
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ServicePage
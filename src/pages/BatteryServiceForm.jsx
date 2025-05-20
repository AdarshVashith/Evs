import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RazorpayButton from '../components/RazorpayButton'
import { calculateServicePrice, formatINR } from '../utils/razorpay'
import { FiCheckCircle } from 'react-icons/fi'

const BatteryServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    batteryType: '',
    brand: '',
    model: '',
    serialNumber: '',
    voltage: '',
    capacity: '',
    problems: {
      notCharging: false,
      lowBackup: false,
      overheat: false,
      swelling: false,
      leakage: false,
      other: false
    },
    otherDetails: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [paymentId, setPaymentId] = useState(null)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        problems: {
          ...prev.problems,
          [name]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form is valid, proceed with payment
    // You would normally send this data to your backend
    console.log('Form submitted:', formData)
  }
  
  const handlePaymentSuccess = (paymentId) => {
    setPaymentId(paymentId)
    setIsSubmitted(true)
    // You would normally send this data to your backend
    console.log('Payment successful:', paymentId)
  }
  
  const serviceAmount = calculateServicePrice('battery', formData.batteryType)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="bg-bharat-green-500 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Battery Service Request</h1>
          <p className="text-xl max-w-3xl">
            Complete the form below to schedule a battery service appointment with our expert technicians.
          </p>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit}>
                  {/* Customer Details */}
                  <div className="form-section">
                    <h2 className="form-title">Customer Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Battery Information */}
                  <div className="form-section">
                    <h2 className="form-title">Battery Information</h2>
                    <div>
                      <label htmlFor="batteryType" className="block text-sm font-medium text-gray-700 mb-1">
                        Battery Type *
                      </label>
                      <select
                        id="batteryType"
                        name="batteryType"
                        value={formData.batteryType}
                        onChange={handleChange}
                        className="select-field"
                        required
                      >
                        <option value="">Select Battery Type</option>
                        <option value="leadAcid">Lead Acid</option>
                        <option value="lithiumIon">Lithium Ion</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                          Brand Name
                        </label>
                        <input
                          type="text"
                          id="brand"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                          Model Number
                        </label>
                        <input
                          type="text"
                          id="model"
                          name="model"
                          value={formData.model}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Serial Number
                        </label>
                        <input
                          type="text"
                          id="serialNumber"
                          name="serialNumber"
                          value={formData.serialNumber}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label htmlFor="voltage" className="block text-sm font-medium text-gray-700 mb-1">
                          Voltage
                        </label>
                        <input
                          type="text"
                          id="voltage"
                          name="voltage"
                          value={formData.voltage}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g. 48V"
                        />
                      </div>
                      <div>
                        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                          Capacity
                        </label>
                        <input
                          type="text"
                          id="capacity"
                          name="capacity"
                          value={formData.capacity}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="e.g. 30Ah"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Problem Information */}
                  <div className="form-section">
                    <h2 className="form-title">Problem Reported</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="notCharging"
                          name="notCharging"
                          checked={formData.problems.notCharging}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="notCharging" className="ml-2 text-sm text-gray-700">
                          Not Charging
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="lowBackup"
                          name="lowBackup"
                          checked={formData.problems.lowBackup}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="lowBackup" className="ml-2 text-sm text-gray-700">
                          Low Backup
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="overheat"
                          name="overheat"
                          checked={formData.problems.overheat}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="overheat" className="ml-2 text-sm text-gray-700">
                          Overheat
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="swelling"
                          name="swelling"
                          checked={formData.problems.swelling}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="swelling" className="ml-2 text-sm text-gray-700">
                          Swelling
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="leakage"
                          name="leakage"
                          checked={formData.problems.leakage}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="leakage" className="ml-2 text-sm text-gray-700">
                          Leakage
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="other"
                          name="other"
                          checked={formData.problems.other}
                          onChange={handleChange}
                          className="checkbox-field"
                        />
                        <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                          Other
                        </label>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label htmlFor="otherDetails" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Details
                      </label>
                      <textarea
                        id="otherDetails"
                        name="otherDetails"
                        value={formData.otherDetails}
                        onChange={handleChange}
                        rows="4"
                        className="input-field"
                        placeholder="Please provide any additional details about the issues you're experiencing..."
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Service Fee */}
                  <div className="form-section">
                    <h2 className="form-title">Service Fee</h2>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Battery Diagnostic Service:</span>
                        <span className="font-medium">{formatINR(serviceAmount)}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        This fee covers a comprehensive diagnostic evaluation of your battery. 
                        Any additional repairs or replacement parts will be quoted separately after diagnosis.
                      </p>
                      <div className="flex justify-between items-center font-semibold border-t pt-2">
                        <span>Total Amount:</span>
                        <span className="text-bharat-green-600">{formatINR(serviceAmount)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Button */}
                  <div className="mt-8">
                    <RazorpayButton
                      amount={serviceAmount}
                      name={formData.name}
                      email={formData.email}
                      phone={formData.phone}
                      serviceType="Battery"
                      onSuccess={handlePaymentSuccess}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By proceeding with payment, you agree to our 
                    <a href="#" className="text-bharat-green-500 hover:underline"> Terms of Service</a> and 
                    <a href="#" className="text-bharat-green-500 hover:underline"> Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <FiCheckCircle size={64} className="text-bharat-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Request Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for choosing BHARAT EVs for your battery service needs. We've received your request and payment.
              </p>
              <div className="bg-gray-50 rounded-md p-4 mb-6 inline-block">
                <p className="text-sm text-gray-700">Payment ID: <span className="font-mono">{paymentId}</span></p>
              </div>
              <p className="text-gray-600 mb-6">
                One of our service representatives will contact you within 24 hours to schedule your appointment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/" className="btn btn-primary">
                  Return to Home
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Support
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BatteryServiceForm
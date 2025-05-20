import { useState } from 'react'

const RazorpayButton = ({ amount, name, email, phone, serviceType, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount / 100)
  }

  const handlePayment = () => {
    setIsProcessing(true)
    
    // Replace with your actual Razorpay key
    const options = {
      key: "rzp_test_YOUR_KEY_HERE", // Replace with actual key
      amount: amount,
      currency: "INR",
      name: "BHARAT EVs",
      description: `${serviceType} Service`,
      image: "https://example.com/your_logo",
      handler: function(response) {
        setIsProcessing(false)
        // Handle successful payment
        if (response.razorpay_payment_id) {
          onSuccess(response.razorpay_payment_id)
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
        service_type: serviceType
      },
      theme: {
        color: "#22c55e"
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false)
        }
      }
    }
    
    try {
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (err) {
      console.error("Payment failed:", err)
      setIsProcessing(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handlePayment}
      disabled={isProcessing}
      className={`btn btn-primary w-full ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {isProcessing ? 'Processing...' : `Pay ${formatINR(amount)}`}
    </button>
  )
}

export default RazorpayButton
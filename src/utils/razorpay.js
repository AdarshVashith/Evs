// Helper function to calculate price based on service type
export const calculateServicePrice = (serviceType, batteryType = null, vehicleType = null) => {
  let basePrice = 0;
  
  // Battery service pricing
  if (serviceType === 'battery') {
    if (batteryType === 'leadAcid') {
      basePrice = 199900; // ₹1,999
    } else if (batteryType === 'lithiumIon') {
      basePrice = 299900; // ₹2,999
    } else {
      basePrice = 149900; // Default price ₹1,499
    }
  } 
  // Vehicle service pricing
  else if (serviceType === 'vehicle') {
    if (vehicleType === '2W') {
      basePrice = 149900; // ₹1,499
    } else if (vehicleType === '3W') {
      basePrice = 249900; // ₹2,499
    } else if (vehicleType === 'eRickshaw') {
      basePrice = 299900; // ₹2,999
    } else if (vehicleType === 'loader') {
      basePrice = 349900; // ₹3,499
    } else {
      basePrice = 199900; // Default price ₹1,999
    }
  }
  
  return basePrice;
};

// Format currency for display
export const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount / 100);
};
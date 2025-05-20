import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CategoryPage from './pages/CategoryPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import SignInPage from './pages/SignInPage'
import NotFoundPage from './pages/NotFoundPage'
import BatteryServiceForm from './pages/BatteryServiceForm'
import VehicleServiceForm from './pages/VehicleServiceForm'
import TwoWheelerProducts from './pages/TwoWheelerProducts'
import ThreeWheelerProducts from './pages/ThreeWheelerProducts'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="category/two-wheelers" element={<TwoWheelerProducts />} />
          <Route path="category/three-wheelers" element={<ThreeWheelerProducts />} />
          <Route path="category/battery-service" element={<BatteryServiceForm />} />
          <Route path="category/vehicle-service" element={<VehicleServiceForm />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
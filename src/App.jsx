import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Nav from './Components/Navbar/Navbar'
import Index from './Components/Pages/Index'
import ProductDetails from './Components/Pages/ProductDetails'
import Wishlist from './Components/Pages/Wishlist'
import Cart from './Components/Pages/Cart'
import Checkout from './Components/Pages/Checkout'
import FloatingWhatsapp from './Components/Pages/FloatingWhatsapp'
import Footer from './Components/Footer/Footer'
import About from './Components/Pages/About'
import Shop from './Components/Pages/Shop'
import Stores from './Components/Pages/Stores'
import Footwear from './Components/Pages/Footwear'
import Contact from './Components/Pages/Contact'

function App() {
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true'
    return isLoggedIn ? children : <Navigate to='/admin-login' />
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/footwear' element={<Footwear />} />
        <Route path='/contact' element={<Contact />} />

        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}

export default App

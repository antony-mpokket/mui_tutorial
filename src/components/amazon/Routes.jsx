import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AmazonNavbar from './components/AmazonNavbar'
import AmazonCart from './pages/cart/AmazonCart'
import AmazonShop from './pages/shop/AmazonShop'
import ShopContextProvider from './context/ShopContext'


const AmazonRoutes = () => {
  return (
    <>
      <ShopContextProvider>
        <AmazonNavbar />
        <Routes>
          <Route path="/" element={<AmazonShop />} />
          <Route path="/cart" element={<AmazonCart />} />
        </Routes>
      </ShopContextProvider>
    </>
  );
}

export default AmazonRoutes;
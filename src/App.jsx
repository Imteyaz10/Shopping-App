import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartNumbers } from './features/cart/cartSlice';
function App() {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(setCartNumbers())
  }, [cartItems])


  return (
    <div className="wrapper bg-dark text-white">
      <Navbar title="Ezee-cart-Blitz" />
      <div className='contanier mt-5 py-5 px-3 px-md-5'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Single/:id" element={<Single />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App; 

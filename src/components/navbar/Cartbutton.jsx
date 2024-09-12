import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Cartbutton() {

  const nav = useNavigate();
  const handleCartNavigation = () => {
    nav("/Cart");
  }

  const { cartItems } = useSelector((state) => state.cart);
  const item = [];
  const bgColorName = cartItems.length === 0 ? "none" : 'white';
  return (
    <button
      onClick={handleCartNavigation}

      type='button' className='btn btn-outline-success d-md-block mt-3 mt-lg-0'>

      <i className='bi bi-cart3'></i>
      <span className='mx-2'>checkout</span>
      <span className={`badge text-success bg-${bgColorName}`}>{cartItems.length}</span>
    </button>
  )
}

export default Cartbutton

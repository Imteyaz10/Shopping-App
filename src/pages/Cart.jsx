import React from 'react'
import Nocontent from '../components/extra/Nocontent'
import { useSelector } from "react-redux"
import Cartitem from '../components/cart/Cartitem';
import CartNumbers from '../components/cart/CartNumbers';
import CartBuybutton from '../components/cart/CartBuybutton';
function Cart() {
  const {cartItems} = useSelector((state) => state.cart);
  if (cartItems.length == 0) {
    return (
      <div>
        <Nocontent text='Nothing In Your cart' btnText='Browse Products' />
      </div>
    )
  }
  return (
    <div className='row py-3'>
      <div className='col-12 col-md-10 col-lg-8 mx-auto'>
        <div id="cart" className='border p-3 bg-white text-dark my-3 my-md-0 rounded'>
          <h4 className='mb-3 px-1'>Cart</h4>
          <ul className='list-group mb-3'>
            {cartItems.map((item) => {
              return <Cartitem key={item.id} item={item} />
            })}
          </ul>
          {/* <CartBuybutton/> */}
          <CartNumbers />
          <CartBuybutton />
        </div>
      </div>
    </div>
  )
}

export default Cart

import React from 'react'
import { addToCart, removeFromCart } from '../../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
function ProductButton(props) {

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(addToCart(props.product))
  }

  const handleRemoveClick = () => {
    dispatch(removeFromCart(props.product))
  }

  const isPresentIncart = cartItems.find((item) => item.id === props.product.id)
  if (isPresentIncart) {
    return (
      <div
        onClick={handleRemoveClick}
        className='btn btn-outline-danger d-block w-100'>Remove from Cart</div>
    )

  } else {
    return (
      <div
        onClick={handleAddClick}
        className='btn btn-outline-success d-block w-100'>Add To Cart</div>
    )
  }

}

export default ProductButton

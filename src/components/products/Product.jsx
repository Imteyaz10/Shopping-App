import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductButton from './ProductButton';
import Price from '../extra/Price';
function Product(props) {
  const { product } = props;
  const nav = useNavigate();

  const imgPath = "/images/" + product.id + ".jpg";

  const handleClick = () => {
    nav(`/single/${product.id}`);
  }
  return (
    <div className='col'>
      <div className='card h-100' id="product">
        <img src={imgPath} onClick={handleClick} title={product.name} alt="" className='card-img-top pointer' />
        <div className='card-body p-4'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{product.name}</h5>
            <span><Price value={product.price} /></span>
          </div>
        </div>
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'><ProductButton product={props.product} /> </div>
      </div>

    </div>
  )
}

export default Product

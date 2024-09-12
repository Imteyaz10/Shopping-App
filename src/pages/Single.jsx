import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductButton from '../components/products/ProductButton'
import { useSelector, useDispatch } from 'react-redux';
import Line from '../components/extra/Line';
import Products from "../components/products/Products";
import { setSingleProduct } from '../features/product/productSlice'
import Price from '../components/extra/Price';

function Single() {
  const { id } = useParams();

  //due to useSelector it will go in infinite call trap whenever we change the prod id
  const { single, singleSimilarProduct } = useSelector((state) => state.products)
  // console.log("single", singleProduct);

  const imgPath = "/images/" + single.id + ".jpg";

  const dispatch = useDispatch();
  //so we useEffect 
  useEffect(() => {
    dispatch(setSingleProduct(id));
  }, [id])
  return (
    <div id='single' className='row justify-content-center align-items-center text-white mx-auto'>
      <div className='col-md-6'>
        <img src={imgPath} alt={single.name} className='card-img-top mb-5 mb-md-0 p-0 p-lg-0'></img>
      </div>
      <div className='col-md-6 text-center text-md-start'>
        <h2 className='fs-1 fw-bold'>{single.name}</h2>
        <div className='fs-5 mb-2'> <Price value={single.price} /></div>
        <p className='lead'>{single.description}</p>
        <ProductButton product={single} />
      </div>
      <div className='m-3'><Line /></div>
      <h2 className='text-white my-3 text-center'>Similar Products Like This</h2>
      <Products products={singleSimilarProduct} />
    </div>
  )
}

export default Single

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../features/product/productSlice';

function CategorySelc() {
  const { categories, selectedCategory } = useSelector((state) => state.products);
  const title = selectedCategory;

  const dispatch = useDispatch()
  const handleMouseEnter = (e) => {
    dispatch(setSelectedCategory(e.target.innerText))
  }
  return (
    <div className='dropdown mb-3 mb-lg-0'>
      <button className='btn btn-outline-success text-color-white dropdown-toggle' type='button' id='dropdDownButton1' data-bs-toggle='dropdown'>
        {title}
      </button>
      <ul className='dropdown-menu'>
        {categories.map((p) => (<li onMouseEnter={handleMouseEnter} key={p} className='dropdown-item pointer'>{p}</li>))}
        {/* <li><a href="#" className='dropdown-item pointer'>Shirts</a></li> */}
      </ul>
    </div>
  )
}

export default CategorySelc;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchTerm } from '../../features/product/productSlice';
function Searchbar() {

  const { searchTerm } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  }


  return (
    <form onSubmit={handleSubmit} className='d-flex ms-mb-0 ms-lg-3'>
      <input className="form-control ms-md-auto me-2" type='search' placeholder='Search Products'

        onChange={handleChange}
        value={searchTerm}
      />
    </form>
  )
}

export default Searchbar

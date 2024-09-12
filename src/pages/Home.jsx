import React from 'react'
import { useSelector } from 'react-redux';
import Products from '../components/products/Products'
function Home() {
    const { productsFromSearch } = useSelector((state) => state.products)
    console.log(productsFromSearch);

    return (
        <Products products={productsFromSearch} />

    )
}

export default Home

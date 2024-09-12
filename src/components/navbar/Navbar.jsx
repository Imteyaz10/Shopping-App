import React from 'react'
import CategorySlec from './CategorySelc';
import Searchbar from './Searchbar';
import CartBuyyon from './Cartbutton';
import CategorySelc from './CategorySelc';
import Cartbutton from './Cartbutton';
import { useNavigate, useLocation } from 'react-router-dom'
function Navbar(props) {
  const nav = useNavigate();
  const { pathname } = useLocation();


  const handleHomeNavigation = () => {
    nav("/");
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top'>
      <div className='container-fluid px-md-5'>
        <span id='name' className='navbar-brand fw-bold pointer'
          onClick={handleHomeNavigation}
        >
          {props.title}
        </span>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id='navbarSupportedContent'>
          {
            pathname === "/" && (
              <>
                <CategorySelc />
                <Searchbar />
              </>
            )
          }
          <Cartbutton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

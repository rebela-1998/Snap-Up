// import React from 'react';
import './Header.css';
import Category from './Category'

const Header = () => {
  return (
    <div className='header'>
      <Category/>
      {/* <h1 className='page-name'>Product</h1> */}
      <ul className='sort'>
        <li className='sort-option'>Default</li>
        <li className='sort-option'>A-Z</li>
        <li className='sort-option'>Price High-Low</li>
        <li className='sort-option'>Price Low-High</li>
      </ul>
    </div>
  )
}

export default Header


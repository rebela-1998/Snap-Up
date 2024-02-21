import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <nav className='container-Menu'>
          <a className='brand' href='/home'>{document.title}</a>
          <div className='Menu-Options' id='Options'>
            <ul className='Nav-items'>
                <li className='items'><a className='nav-link' href='/all-items'>Shop</a></li>
                <li className='items'><a className='nav-link' href='/Order-history'>My Orders</a></li>
                <li className='items'><a className='nav-link' href='/Profile'>My Profile</a></li>
                <li className='items'><a className='nav-link' href='/Conatct'>Contact Us</a></li>
            </ul>
            <div className='Menu-hidden-s-device'>
              <img className='menu-icon-s-device' src='src\assets\menu.png' alt='Icon to show menu option'/>
            </div>
            <button className='cart' type="submit" href='/'>Cart</button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar

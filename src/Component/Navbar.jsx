 import './Navbar.css';
 import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className='container-Menu'>
          <NavLink className='brand' to='/'>{document.title}</NavLink>
          <div className='Menu-Options' id='Options'>
            <ul className='Nav-items'>
                <li className='items'><NavLink className='nav-link' to='/products'>Shop</NavLink></li>
                <li className='items'><NavLink className='nav-link' to='/order-history'>My Orders</NavLink></li>
                <li className='items'><NavLink className='nav-link' to='/account'>My Account</NavLink></li>
                <li className='items'><NavLink className='nav-link' to='/contact'>Contact Us</NavLink></li>     
                <li className='cart'><NavLink className='cart-link' to='/cart'>Cart</NavLink></li>
            </ul>
            <div className='Menu-hidden-s-device'>
              <img className='menu-icon-s-device' src='src\assets\menu.png' alt='Icon to show menu option'/>
            </div>
          </div>
        </nav>  
    </>
  )
}

export default Navbar

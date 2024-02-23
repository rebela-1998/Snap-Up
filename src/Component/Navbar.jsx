 import './Navbar.css';

const Navbar = () => {
  return (
    <>
        <nav className='container-Menu'>
          <a className='brand' href='/home'>{document.title}</a>
          <div className='Menu-Options' id='Options'>
            <ul className='Nav-items'>
                <li className='items'><a className='nav-link' href='/all-items'>Shop</a></li>
                <li className='items'><a className='nav-link' href='/order-history'>My Orders</a></li>
                <li className='items'><a className='nav-link' href='/profile'>My Profile</a></li>
                <li className='items'><a className='nav-link' href='/contact'>Contact Us</a></li>
            </ul>
            <div className='Menu-hidden-s-device'>
              <img className='menu-icon-s-device' src='src\assets\menu.png' alt='Icon to show menu option'/>
            </div>
            <button className='cart' type="submit" href='/'>Cart</button>
          </div>
        </nav>  
    </>
  )
}

export default Navbar

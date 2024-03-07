import { NavLink , Outlet} from 'react-router-dom'
import './AccountNav.css'

const AccountNav = () => {

    return (
        <>
            <nav className='account-nav'>
                <ul className='account-nav-options'>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/account' >My Account</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='profile'>Edit Profile</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='address'>My Addresses</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/order-history'>My Orders</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/account/wishlist'>My Wish List</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default AccountNav

// import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './AccountNav.css'

const AccountNav = () => {
   const navigate=useNavigate();

   const gotoAccount=()=>{
    navigate('/account');
   }

   const gotoProfile=()=>{
    navigate('/account/profile');
   }

   const gotoAddress=()=>{
    navigate('/account/address');
   }

   const gotoOrders=()=>{
    navigate('/orders');
   }

   const gotoWishlist=()=>{
    navigate('/account/wishlist');
   }


    return (
            <nav className='account-nav'>
                <ul className='account-nav-options'>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/account' onClick={gotoAccount}>My Account</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/account/profile' onClick={gotoProfile}>Edit Profile</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/address' onClick={gotoAddress}>My Addresses</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/orders' onClick={gotoOrders}>My Orders</NavLink></li>
                    <li className='acc-nav'><NavLink className='acc-nav-link' to='/wishlist'  onClick={gotoWishlist}>My Wish List</NavLink></li>
                </ul>
            </nav>
    )
}

export default AccountNav

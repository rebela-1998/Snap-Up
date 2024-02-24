// import React from 'react'
import './AccountNav.css'

const AccountNav = () => {
    return (
            <nav className='account-nav'>
                <ul className='account-nav-options'>
                    <li className='acc-nav'><a className='acc-nav-link' href='/account'>My Account</a></li>
                    <li className='acc-nav'><a className='acc-nav-link' href='/profile'>Edit Profile</a></li>
                    <li className='acc-nav'><a className='acc-nav-link' href='/address'>My Addresses</a></li>
                    <li className='acc-nav'><a className='acc-nav-link' href='/orders'>My Orders</a></li>
                    <li className='acc-nav'><a className='acc-nav-link' href='/wishlist'>My Wish List</a></li>
                </ul>
            </nav>
    )
}

export default AccountNav

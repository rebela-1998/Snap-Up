// import React from 'react';
// import { Outlet } from 'react-router-dom';
import './Account.css';
// import AccountNav from './AccountNav';

const Account = () => {
  return (
    <>
      <div className='my-account'>
        <p className='acc-nav-options'>Profile Details</p>
        <p className='username'>Rebela Ray</p>
        <p className='p-details'>rebela.111@gmail.com</p>
        <p className='p-details'>(+91) 9234678991</p>
        <p className='orders'>My Total Orders: 100</p>
        <p className='spent'>My Total Spent: Rs. 2500</p>
      </div>
    </>
  )
}

export default Account

// import React from 'react'
import './Orders.css'

const Orders = () => {
  return (
    <div className='order-history'>
      <h1 className='page-name'>My Orders</h1>
      <p className='period'>Showing orders for the last 6 months</p>
      <div className='order'>
        <span className='status'>Status</span>
        <span className='date-time'>Placed On</span>
        <span className='amount'>Total Amount</span>
        <span className='qty-ordered'>Total Quantity</span>
      </div>
    </div>
  )
}

export default Orders

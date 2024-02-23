// import React from 'react'
import './Cart.css';

const Cart=()=>{
    return (
      <>
        <div className="checkout-box">
            <p className="Total-items">Subtotal(9 items): Rs: 1000.00</p>
            <button className="checkout" href='/' type="submit">Checkout</button>
        </div>
        <div className="itms">
            <div className="itm">
                <img className='cart_img' src="src\assets\Tom.jpeg" alt='product 1'/>
                <p className="itemName">Tomato</p>
                <p className='itemwt'>1kg</p>
                <div className="qty">
                 <button type="button" className="qty_update">-</button>
                 <p className='final_qty'>1</p> 
                < button type="button" className="qty_update">+</button>
                </div>
                <p className="price">Rs.1000.00</p>
            </div>
        </div>
      </>
    )
}

export default Cart

import './Cart.css';
import {  useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart)
  
  return (
    <>
      {items.length==0?
        <p className='empty-cart'>Your cart is empty</p>
      :
      <div className='added-items'>
        <div className="checkout-box">
          <p className="Total-items">Subtotal ({items.length} items): Rs: {items.product_price}</p>
          <button className="checkout" href='/' type="submit">Checkout</button>
        </div>
        <div className="itms" >
        {items.map(item => (
            <div className="itm" key={item.product_id}>
              <img className='cart_img' src={item.imgUrl} alt='product 1' />
              <p className="itmName">{item.product_name}</p>
              <p className='itmwt'>{item.product_unit}</p>
              <div className="qty">
                <button type="button" className="qty_update">-</button>
                <p className='final_qty'>1</p>
                < button type="button" className="qty_update">+</button>
              </div>
              <p className="price">Rs. {item.product_price}</p>
            </div>
        )
        )}
        </div>
      </div>
    }
    </>
  )
}

export default Cart

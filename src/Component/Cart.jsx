import './Cart.css';
import {  useSelector,useDispatch } from 'react-redux';
import { increaseItemQty,decreaseItemQty,removeItem } from '../Store/Slices/CartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart)
  const dispatch=useDispatch();

  const increaseQty = (id) => {
    dispatch(increaseItemQty(id));
  }

  const decreaseQty = (id) => {
    dispatch(decreaseItemQty(id));
  }
  const removeFromCart = (product) => {
    dispatch(removeItem(product));
  }

  const addedQty=(id)=>{
    for(let i of items){
      if(i.product_id===id)
        return i.quantity;
     }
  }

  const totalPrice=(id,price)=>{
    if(addedQty(id)==1){
      return price
    }
    else{
      return price*addedQty(id)
    }
  }

  const checkoutAmnt=()=>{
    let totalAmount=0;
    for(let i of items){
      totalAmount=totalAmount+Number(totalPrice(i.product_id,i.product_price))
    }
    return totalAmount
  }

  return (
    <>
      {items.length==0?
        <p className='empty-cart'>Your cart is empty</p>
      :
      <div className='added-items'>
        <div className="checkout-box">
          <p className="Total-items">Subtotal ({items.length} items): Rs: {checkoutAmnt()}</p>
          <button className="checkout" href='/' type="submit">Checkout</button>
        </div>
        <div className="itms" >
        {items.map(item => (
            <div className="itm" key={item.product_id}>
              <img className='cart_img' src={item.imgUrl} alt='product 1' />
              <p className="itmName">{item.product_name}</p>
              <p className='itmwt'>{item.product_unit}</p>
              <div className="qty">
                <button type="button" className="qty_update" onClick={() => {
                          addedQty(item.product_id)==1?
                          removeFromCart(item)
                          :
                          decreaseQty(item.product_id)}}>-</button>
                <p className='final_qty'>{addedQty(item.product_id)}</p>
                < button type="button" className="qty_update" onClick={() => {increaseQty(item.product_id)}}>+</button>
              </div>
              <p className="price">Rs. {totalPrice(item.product_id,item.product_price)}</p>
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

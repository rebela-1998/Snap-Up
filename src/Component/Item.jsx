/* eslint-disable react/prop-types */
import './Item.css'
import { useDispatch,useSelector } from 'react-redux'
import { addItem,increaseItemQty,decreaseItemQty, removeItem } from '../Store/Slices/CartSlice'
import { savedItem } from '../Store/Slices/SavedSlice'


const Item = ({ itemDetails }) => {
  const dispatch = useDispatch();
  // const [toggleAdd, setToggleAdd] = useState(true);
  const cartItm=useSelector((state)=>state.cart)
  const addToCart = (product) => {
    dispatch(addItem(product));
  }

  const increaseQty = (id) => {
    dispatch(increaseItemQty(id));
  }

  const decreaseQty = (id) => {
    dispatch(decreaseItemQty(id));
  }
  const removeFromCart = (product) => {
    dispatch(removeItem(product));
  }

  const addToWishlist = (product) => {
    dispatch(savedItem(product))
  }

  const isProductAdded=(id)=>{
    let addedProduct=cartItm;
    if(addedProduct.filter(item=>item.product_id==id).length!==0)
    return true;
  }

  const addedQty=(id)=>{
    for(let i of cartItm){
      if(i.product_id===id)
        return i.quantity;
     }
  }

  return (
    <>
      <div className="Products">
        {itemDetails.map((Element) => {
          const { product_id,imgUrl, product_name, product_price, product_unit, quantity } = Element;
          return (
            <div className='item' key={product_id}>
              <img src={imgUrl} className='itemImg' alt='product' />
              <div className='itemBody'>
                <h5 className='itemName'>{product_name}</h5>
                <p className='price_qty'>Rs.{product_price}/{product_unit}</p>
                <div className='add-to-cart' >
                { !isProductAdded(product_id)?
                    <button className='add' onClick={() => {addToCart(Element)}}>Add To Cart</button>
                     :
                      <div className="qty">
                        <button type="button" className="qty_update" 
                        onClick={() => {
                          addedQty(product_id)==1?removeFromCart(Element)
                          :
                          decreaseQty(product_id)}}>
                            -
                          </button>
                        <p className='final_qty'>{addedQty(product_id)}</p>
                        < button type="button" className="qty_update" onClick={() => {increaseQty(product_id)}}>+</button>
                      </div>
                  }
                </div>
                <button className='save' onClick={() => {
                  addToWishlist(Element);
                }}>
                  <img className='save-icon' src='src\assets\saveLater.png' alt='Save for Later' />
                </button>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}


export default Item

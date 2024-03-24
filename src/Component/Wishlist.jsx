import { useSelector,useDispatch } from 'react-redux'
import './Wishlist.css'
import { removeSavedItem } from '../Store/Slices/SavedSlice';


const Wishlist = () => {
  const dispatch=useDispatch();
  const itms=useSelector((state)=>state.wishlist); 

  const deleteItem=(id)=>{
     dispatch(removeSavedItem(id))
  }

  return (
    <> 
    {itms.length==0?
        <p className='empty-wishlist'>Your wishlist is empty</p>
      :
      <div className='saved-items'>
        {itms.map(itm=>(
        <div className='prod' key={itm.product_id}>
              <img src={itm.imgUrl} className='prodImg' alt='product' />
              <h5 className='prodName'>{itm.product_name}</h5>
              <button className='del' type='submit' onClick={()=>deleteItem(itm.product_id)}><i className="fa-solid fa-trash-can" /></button>
              <p className='price-qty'>Rs.{itm.product_price}/{itm.product_unit}</p>
        </div>
        ))}
       </div> 
    }
    </>
    )
}

export default Wishlist

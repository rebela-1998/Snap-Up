import { useSelector } from 'react-redux'
import './Wishlist.css'


const Wishlist = () => {

  const itms=useSelector((state)=>state.wishlist);
  // const { product_id, imgUrl,product_name, product_price, product_unit } = itms;
  console.log('wishlist: '+ itms)


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
              <p className='price-qty'>Rs.{itm.product_price}/{itm.product_unit}</p>
        </div>
        ))}
       </div> 
    }
    </>
    )
}

export default Wishlist

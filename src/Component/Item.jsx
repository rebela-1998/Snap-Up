/* eslint-disable react/prop-types */
import './Item.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../Store/Slices/CartSlice'

const Item = ({ itemDetails }) => {
  const dispatch = useDispatch();
  const [toggleAdd, setToggleAdd] = useState(true);


  const addToCart = (itm) => {
    dispatch(addItem(itm));
  }

  return (
    <>
      <div className="Products">
        {itemDetails.map((Element) => {
          const { product_id, product_name, product_price, product_unit } = Element;
          return (
            <div className='item' key={product_id}>
              <img src={Element.imgUrl} className='itemImg' alt='product' />
              <div className='itemBody'>
                <h5 className='itemName'>{product_name}</h5>
                <p className='price_qty'>Rs.{product_price}/{product_unit}</p>
                <div className='add-to-cart' onClick={() => {
                  addToCart(Element);
                  setToggleAdd(!toggleAdd);
                }
                }>
                  {toggleAdd ?
                    (<button className='add' type='submit'>Add To Cart</button>
                    ) : (
                      <div className="qty">
                        <button type="button" className="qty_update">-</button>
                        <p className='final_qty'>1</p>
                        < button type="button" className="qty_update">+</button>
                      </div>
                    )
                  }
                </div>
                <button className='save' type='submit'>
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

// import React from 'react';
import'./Item.css'
import Header from './Header'

const Item = () => { 

  return (
    <>
    <Header/>
    <div className="Products">
      <div className='item'>
        <img src='src\assets\Tom.jpeg' className='itemImg' alt='product'/>
        <div className='itemBody'>
            <h5 className='itemName'>Tomato</h5>
            <p className='price_qty'>Rs 50/1kg</p>
            <button className='add' type='submit'>Add to Cart</button>
            <button className='save' type='submit'>
              <img className='save-icon' src='src\assets\saveLater.png' alt='Save for Later'/>
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item

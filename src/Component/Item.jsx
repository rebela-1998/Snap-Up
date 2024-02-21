// import React from 'react';
import'./Item.css'

const Item = () => {
  return (
    <div className="Products">
      <div className='item'>
        <img src='src\assets\Tom.jpeg' className='itemImg' alt='product'/>
        <div className='itemBody'>
            <h5 className='itemName'>Tomato</h5>
            <p className='price'>Rs 50/</p>
            <p className='qty'>1 kg</p>
            <button className='add' type='submit'>Add to Cart</button>
            <button className='save' type='submit'>Save for Later</button>
        </div>
      </div>
    </div>
  )
}

export default Item

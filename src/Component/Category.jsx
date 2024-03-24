import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Category.css'
import { useDispatch } from 'react-redux';
import {viewOnCategory} from '../Store/Slices/CategorySlice'


const Category = () => {
  const [toggleShowNav, setToggleShowNav]=useState(false);
  const dispatch=useDispatch()

  const viewCategory=(category)=>{
    dispatch(viewOnCategory(category))
  }

  return (
    <div className='category-list'>
      <button className='ctgry-btn' type='button' onClick={()=>setToggleShowNav(!toggleShowNav)}>Shop By Category<i className="fa-solid fa-caret-down"/></button> 
      {toggleShowNav && (<nav className='ctgry-nav'>
        <ul className='ctgry-list' >
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('all')}>All Categories</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('fruits')}>Fruits</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('vegetables')}>Vegetables</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('pulses')}>Pulses</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('rices')}>Rice</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('oils')}>Oil</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={()=>viewCategory('spices')}>Masala</NavLink></li>
        </ul>
      </nav> )} 
    </div>
  )
}

export default Category

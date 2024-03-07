import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Category.css'


const Category = () => {
  const [toggleShowNav, setToggleShowNav]=useState(false);

  return (
    <div className='category-list'>
      <button className='ctgry-btn' type='button' onClick={()=>setToggleShowNav(!toggleShowNav)}>Shop By Category<i className="fa-solid fa-caret-down"/></button> 
      {toggleShowNav && (<nav className='ctgry-nav'>
        <ul className='ctgry-list' >
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Fruits</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Vegetables</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Pulses</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Rice</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Oil</NavLink></li>
          <li className='ctgry-options'><NavLink className='ctgry-link' to='/products'>Masala</NavLink></li>
        </ul>
      </nav> )} 
    </div>
  )
}

export default Category

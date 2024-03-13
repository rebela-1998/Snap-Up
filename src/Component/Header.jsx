import './Header.css';
import Category from './Category'
import {  useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sortingDefault,sortingAlphabatically,sortingPriceHL,sortingPriceLH } from '../Store/Slices/ProductViewSlice';

const Header = () => {
  const dispatch=useDispatch();

  const sortDefault=()=>{
     dispatch(sortingDefault())
  }

  const sortAlphabatically=()=>{
    dispatch(sortingAlphabatically())
 }

 const sortPriceLH=()=>{
  dispatch(sortingPriceLH())
}

const sortPriceHL=()=>{
  dispatch(sortingPriceHL())
}

  return (
    <div className='header'>
      <Category/>
      <ul className='sort'>   
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={()=>sortDefault()} to='/products'>Default</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={()=>sortAlphabatically()} to='/products'>A-Z</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={()=>sortPriceLH()} to='/products'>Price Low-High</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={()=>sortPriceHL()} to='/products'>Price High-Low</NavLink>
        </li>
     </ul>
    </div>
  )
}

export default Header


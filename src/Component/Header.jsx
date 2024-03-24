import './Header.css';
import './Category.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Category.css'
import { useDispatch } from 'react-redux';
import { viewOnCategory,sortingDefault, sortingAlphabatically, sortingPriceHL, sortingPriceLH } from '../Store/Slices/ProductViewSlice';

const Header = () => {
  const dispatch = useDispatch();

  const [toggleShowNav, setToggleShowNav] = useState(false);

  const viewCategory = (category) => {
    dispatch(viewOnCategory(category))
  }

  const sortDefault = () => {
    dispatch(sortingDefault())
  }

  const sortAlphabatically = () => {
    dispatch(sortingAlphabatically())
  }

  const sortPriceLH = () => {
    dispatch(sortingPriceLH())
  }

  const sortPriceHL = () => {
    dispatch(sortingPriceHL())
  }

  return (
    <div className='header'>
      <div className='category-list'>
        <button className='ctgry-btn' type='button' onClick={() => setToggleShowNav(!toggleShowNav)}>Shop By Category<i className="fa-solid fa-caret-down" /></button>
        {toggleShowNav && (<nav className='ctgry-nav'>
          <ul className='ctgry-list' >
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('all')}>All Categories</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('fruits')}>Fruits</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('vegetables')}>Vegetables</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('pulses')}>Pulses</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('rices')}>Rice</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('oils')}>Oil</NavLink></li>
            <li className='ctgry-options'><NavLink className='ctgry-link' to='/products' onClick={() => viewCategory('spices')}>Masala</NavLink></li>
          </ul>
        </nav>)}
      </div>
      <ul className='sort'>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={() => sortDefault()} to='/products'>Default</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={() => sortAlphabatically()} to='/products'>A-Z</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={() => sortPriceLH()} to='/products'>Price Low-High</NavLink>
        </li>
        <li className='sort-option'>
          <NavLink className='sort-link' onClick={() => sortPriceHL()} to='/products'>Price High-Low</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header


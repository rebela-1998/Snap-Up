import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <h1 className='site-quote'>You want it now, We will deliver it now</h1>
      <NavLink className='browse-items' to='/products'>Shop Now</NavLink>
      <div className='categories'>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Fruits/Vegetables</p>
            </a>
        </span>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Home Decor</p>
            </a>
        </span>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Sports</p>
            </a>
        </span>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Cleaning Household</p>
            </a>
        </span>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Electronics</p>
            </a>
        </span>
        <span className='category'>
            <a className='link-ctgry' href='fruits'>
                <img src='' className='img-category'/>
                <p className='title-ctgry'>Pulses/Rices</p>
            </a>
        </span>
        
      </div>
    </div>
  )
}

export default Home

import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <h1 className='site-quote'>You want it now, We will deliver it now</h1>
      <NavLink className='browse-items' to='/products'>Shop Now</NavLink>
      <div className='categories'>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\fruitsnveges.jpg' className='img-category'/>
                <p className='title-ctgry'>Fruits/Vegetables</p>
            </NavLink>
        </span>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\homeDecor.jpeg' className='img-category'/>
                <p className='title-ctgry'>Home Decor</p>
            </NavLink>
        </span>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\sports.jpeg' className='img-category'/>
                <p className='title-ctgry'>Sports</p>
            </NavLink>
        </span>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\cleaningHouse.jpeg' className='img-category'/>
                <p className='title-ctgry'>Cleaning Household</p>
            </NavLink>
        </span>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\electronics.jpeg' className='img-category'/>
                <p className='title-ctgry'>Electronics</p>
            </NavLink>
        </span>
        <span className='category'>
            <NavLink className='link-ctgry' to='/products'>
                <img src='\assets\images\pulsesnrice.webp' className='img-category'/>
                <p className='title-ctgry'>Pulses/Rices</p>
            </NavLink>
        </span>
        
      </div>
    </div>
  )
}

export default Home

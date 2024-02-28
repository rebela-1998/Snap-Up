import './App.css';
import Navbar from './Component/Navbar';
import Item from './Component/Item';
import Cart from './Component/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import Footer from './Component/Footer';
import Home from './Component/Home'
import Account from './Component/Account';
import Profile from './Component/Profile';
import ContactUs from './Component/ContactUs';
// import Category from './Component/Category';
import Orders from './Component/Orders';

const App=()=> {

  return (
  <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/products' element={<Item/>}/>
            <Route path='/order-history' element={<Orders/>}/>
            <Route path='/account' element={<Account/>}>
              <Route path='/account/profile' element={<Profile/>} />
            </Route>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
  </>
  )
}

export default App

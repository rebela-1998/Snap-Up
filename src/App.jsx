import './App.css';
import Navbar from './Component/Navbar';
import Cart from './Component/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import Footer from './Component/Footer';
import Home from './Component/Home'
// import Login from './Component/Login'
import Account from './Component/Account';
import Profile from './Component/Profile';
import ContactUs from './Component/ContactUs';
import Address from './Component/Address';
import Orders from './Component/Orders';
import AccountNav from './Component/AccountNav';
import Product from './Component/Product';
import Wishlist from './Component/Wishlist';

const App=()=> {

  return (
  <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/products' element={<Product/>}/>
            <Route path='/order-history' element={<Orders/>}/>
            <Route path='/account' element={<AccountNav/>}>
              <Route index element={<Account/>}/>
              <Route path='profile' element={<Profile/>}/>
              <Route path='address' element={<Address/>}/>
              <Route path='wishlist' element={<Wishlist/>}/>
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

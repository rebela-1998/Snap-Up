import './App.css';
import Navbar from './Component/Navbar';
import Item from './Component/Item';
import Header from './Component/Header';
import Cart from './Component/Cart';
import {
  BrowserRouter as Router,
  // Routes,
  // Route
} from "react-router-dom"; 
import Footer from './Component/Footer';

const App=()=> {

  return (
  <>
        {/* <Router> */}
          <Navbar />
          {/* <Routes>
            <Route path='/' element={<Pages key='products'category='all' />}></Route>
            <Route path='/all-items' element={<Pages key='products' category='all' />}></Route>
            <Route path='/order-history' element={<Pages key='orders' category='orders' />}></Route>
            <Route path='/profile' element={<Pages key='profile' category='profile' />}></Route>
            <Route path='/contact' element={<Pages key='Contact'  category='contact' />}></Route>
          </Routes> */}
          {/* <Header/>
          <Item /> */}
          {/* <Cart /> */}
          <Footer/>
        {/* </Router> */}
  </>
  )
}

export default App

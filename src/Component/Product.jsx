import Item from "./Item"
import Header from './Header.jsx'
// import products from './productApi.js'
import { useSelector } from "react-redux"

const Product = () => {

  const view=useSelector(state=>state.productView)

  return (
    <>
      <Header />
      <Item  itemDetails={view}/>
    </>
  )
}

export default Product

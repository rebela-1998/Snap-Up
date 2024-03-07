import { useState } from "react"
import Item from "./Item"
import Header from './Header.jsx'
import products from './productApi.js'

const Product = () => {

    // eslint-disable-next-line no-unused-vars
    const [productDetails,setproductDetails]=useState(products);
    // console.log(productDetails);

  return (
    <>
      <Header />
      <Item  itemDetails={productDetails}/>
    </>
  )
}

export default Product

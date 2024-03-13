import { useState } from "react"
import Item from "./Item"
import Header from './Header.jsx'
import products from './productApi.js'
import { useSelector } from "react-redux"

const Product = () => {

  const sort=useSelector(state=>state.productSorting)

  return (
    <>
      <Header />
      <Item  itemDetails={sort}/>
    </>
  )
}

export default Product

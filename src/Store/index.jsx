import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from './Slices/CartSlice'
import savedSlice from "./Slices/SavedSlice";
import productViewSlice from "./Slices/ProductViewSlice";

const store=configureStore({
    reducer:{
        cart: cartSlice.reducer,
        wishlist: savedSlice.reducer,
        productView: productViewSlice.reducer,
        }
})


export default store;
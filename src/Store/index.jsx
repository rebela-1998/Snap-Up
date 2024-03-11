import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from './Slices/CartSlice'
import savedSlice from "./Slices/SavedSlice";


const store=configureStore({
    reducer:{
        cart: cartSlice.reducer,
        wishlist: savedSlice.reducer
    }
})


export default store;
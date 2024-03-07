import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartItem: [],
    cartTotalQty: 0,
    cartTotalAmount: 0
}

const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action){
        state.cartItem.push(action.payload)
        
    },
        removeItem(state, action){
        state.cartItem.pop(action.payload)
        },
    }

})

console.log(cartSlice.actions);

export default cartSlice;
export const {addItem, removeItem}=cartSlice.actions;
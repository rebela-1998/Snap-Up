import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const savedSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        savedItem(state, action) {
         state.push(action.payload)
        },
        removeSavedItem(state, action) {
            return state.filter(item=>(item.product_id!==action.payload))
        },
    }

})

console.log(savedSlice.actions);

export default savedSlice;
export const { savedItem, removeSavedItem } = savedSlice.actions;
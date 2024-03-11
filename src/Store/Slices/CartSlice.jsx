import {createSlice} from "@reduxjs/toolkit";

const initialState=[]

const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action){
        state.push(action.payload)
        
    },
        removeItem(state, action){
         state.pop(action.payload)
    },
        increaseItemQty(state,action){
            state.map(item=>{
               if(item.product_id===action.payload){
                item.quantity+=1
               }
            })
    },
        decreaseItemQty(state,action){
            state.map(item=>{
                if(item.product_id===action.payload){
                 item.quantity-=1
                }
             })
    }
        
    }

})

console.log(cartSlice.actions);

export default cartSlice;
export const {addItem, increaseItemQty, decreaseItemQty, removeItem}=cartSlice.actions;
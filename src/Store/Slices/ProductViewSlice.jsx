import { createSlice } from "@reduxjs/toolkit";
import products from "../../Component/productApi";


const initialState=products;
 
const productViewSlice=createSlice({
     name: "productView",
     initialState,
     reducers: {
      viewOnCategory(state,action){
        if(action.payload=='all'){
          return initialState
        }
        else
        return initialState.filter((itm)=>(itm.category==action.payload))
      },
        sortingDefault(state,action){
               return state;
        },
        sortingAlphabatically(state,action){
               return state.sort((p1, p2) => {
                if (p1.product_name < p2.product_name) {
                    return -1;
                  }
                  if (p1.product_name > p2.product_name) {
                    return 1;
                  }
                 })},
         sortingPriceLH(state,action){   
                return state.sort((p1, p2) => 
                (p1.product_price-p2.product_price))
                
        },
        sortingPriceHL(state,action){
         return state.sort((p1, p2) => 
                (p2.product_price-p1.product_price))
        }
     }

})

export default productViewSlice;
export const {viewOnCategory,sortingDefault,sortingAlphabatically,sortingPriceLH,sortingPriceHL}=productViewSlice.actions; 
 
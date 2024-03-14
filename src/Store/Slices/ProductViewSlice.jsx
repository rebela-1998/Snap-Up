import { createSlice } from "@reduxjs/toolkit";
import products from "../../Component/productApi";

const initialState=products;

const productViewSlice=createSlice({
     name: "productSorting",
     initialState,
     reducers: {
        sortingDefault(state,action){
               return initialState;
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
export const {sortingDefault,sortingAlphabatically,sortingPriceLH,sortingPriceHL}=productViewSlice.actions; 
 
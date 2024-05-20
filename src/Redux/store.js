import { configureStore } from "@reduxjs/toolkit";
import whishListSlice from "./slice/whishListSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer:{
        whishlistReducer:whishListSlice,
        cartReducer:cartSlice
    }
})
export default store
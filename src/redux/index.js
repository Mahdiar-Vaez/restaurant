import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./authSlide";
import cartSlice from "./CartSlice";
const store=configureStore({
    reducer:{
        auth:authSlide,
        cart:cartSlice
    },


})
export default store
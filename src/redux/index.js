import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./authSlide";
const store=configureStore({
    reducer:{
        auth:authSlide
    },


})
export default store
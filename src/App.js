import React, { useState } from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import FoodDetail from "./Pages/FoodDetail";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";  
import { useSelector } from "react-redux";
import ToastContext from "./utils/ToastContext";
export default function App() {
  const {user,token}=useSelector((state)=>state.auth)
    console.log(user,token)
    const [toastMessage,setToastMessage]=useState({
      type:"info",
      message:'خوش آمدید'
    })
   function handleToast(type,message){
    setToastMessage({
      type,
      message
   })}
  return (
    <>
    <ToastContext.Provider value={{toastMessage,handleToast}}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/foods/:name/:id" element={<Foods/>} />
        <Route path="/food-detail/:id/:name" element={<FoodDetail/>} />
        <Route path="/cart" element={user?<Cart/>:<Navigate to={'/login-register'}/>} />
        <Route element={user?<Navigate to={'/'} />:<LoginRegister/>} path="/login-register" />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      </ToastContext.Provider>
    </>
  )
}

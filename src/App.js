import React, { useEffect, useState } from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import FoodDetail from "./Pages/FoodDetail";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";  
import { useDispatch, useSelector } from "react-redux";
import Payment from "./Pages/Payment";
import CheckContext from "./utils/checkoutContext";
import Favorite from "./Pages/Favorite";
import { addItem } from "./redux/CartSlice";
import { addFavorite } from "./redux/FavoriteSlice";
export default function App() {
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)
  const [checkOut,setCheckOut]=useState()
  function handleCheckOut(e){
    setCheckOut(e)
    
  }
  useEffect(() => {
    const localStorageCart = localStorage.getItem("cartList");
    console.log("🚀 ~ useEffect ~ localStorageCart:", JSON.parse(localStorageCart));
    
    const parsedLocalStorage = JSON.parse(localStorageCart);
    if (Array.isArray(parsedLocalStorage)) {
      parsedLocalStorage.forEach((item) => {
        dispatch(addItem(item));
      });
    }
  }, []);
  useEffect(() => {
    // Load favoriteList from local storage when the component mounts
    const savedFavoriteList = localStorage.getItem('favoriteList')
    if (savedFavoriteList) {
   // Clear the current favoriteList
      const parsedFavoriteList = JSON.parse(savedFavoriteList)
      if(Array.isArray(parsedFavoriteList)){
        for (let i = 0; i < parsedFavoriteList.length; i++) {
          const item = parsedFavoriteList[i];
          dispatch(addFavorite(item)); // Add each item to the favoriteList
        }
    }
    }
   
  }, [])
  

  return (
    <>
      <CheckContext.Provider value={{checkOut,handleCheckOut}}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/payment" element={user ? <Payment /> : <Navigate to="/" />} />
        <Route  path="/foods/:name/:id" element={<Foods/>} />
        <Route path="/food-detail/:id/:name" element={<FoodDetail/>} />
        <Route path="/cart" element={user?<Cart/>:<Navigate to={'/login-register'}/>} />
        <Route element={user?<Navigate to={'/'} />:<LoginRegister/>} path="/login-register" />
        <Route path="*" element={<NotFound/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
      <Footer/></CheckContext.Provider>
    </>
  )
}

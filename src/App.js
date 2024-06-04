import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Foods from "./Pages/Foods";
import FoodDetail from "./Pages/FoodDetail";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/foods/:name/:id" element={<Foods/>} />
        <Route path="/food-detail/:id/:name" element={<FoodDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login-register" element={<LoginRegister/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

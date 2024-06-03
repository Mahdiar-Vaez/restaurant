import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
export default function Navbar() {
    const [scale,setScale]=useState(false)
const [distanceFromTop,setDistanceFromTop]=useState()
console.log(distanceFromTop)
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
      setDistanceFromTop(window.scrollY)})
       if( distanceFromTop===0)
    setScale(true)
else
   setScale(false)
  },[distanceFromTop])

    

  return (
    <nav style={{
   

    }} className="section">
       <div className="btn-left">
<CiSearch/>
<MdFavoriteBorder/>
<CiShoppingCart/>
        </div>
      
      <ul>
        <Link style={{ color: "white" }}>
          <li>تماس با ما</li>
        </Link>
        <Link style={{ color: "white" }}>
          {" "}
          <li>سفارش آنلاین</li>
        </Link>
        <Link style={{ color: "white" }}>
          {" "}
          <li>شعبه های ما</li>  
        </Link>
        
      </ul>
      <div className="shape" style={{
        transform:scale?'scale(1.05)':'',
      }}>
        {" "}
        <div className="triangle"></div>
       
        <img
          style={{}}
          src={logo}
          width={110}
          height={110}
          loading="lazy"
          alt="Lafka logo"
        />
      </div>
      <ul>
        <li className="dropdown">منو های ما 
          <FaChevronDown  color='white' fontSize={'small'}/>
          <ul className="dropdown-ul">
            <li>پیتزا</li>
            <li>همبرگر</li>
            <li>نوشیدنی</li>
            <li>سالاد</li>
          </ul>
        </li>
        <li>بلاگ ما</li>
        <li>خانه</li>
        <button className="btn-right">
          
          09056375314</button>
      </ul>
    </nav>
    
  );
}

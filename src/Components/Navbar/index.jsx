import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [scale,setScale]=useState(false)
  const distanceFromTop = window.scrollY;
  useEffect(()=>{
       if( distanceFromTop===0)
    setScale(true)
else
   setScale(false)
  },[distanceFromTop])

    

  return (
    <nav className="section">
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
        transform:scale?'scale(1.05)':''
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
        <li>منو های ما</li>
        <li>بلاگ ما</li>
        <li>خانه</li>
      </ul>
    </nav>
  );
}

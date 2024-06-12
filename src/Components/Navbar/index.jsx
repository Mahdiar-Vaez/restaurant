import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import ToastComponent from "../Toast/Toast";
export default function Navbar() {
  const location = useLocation();
  const navType = useNavigationType();
    const [scale,setScale]=useState(false)
const [distanceFromTop,setDistanceFromTop]=useState()
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
      setDistanceFromTop(window.scrollY)})
       if( distanceFromTop===0)
    setScale(true)
else
   setScale(false)
  },[distanceFromTop])
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: -1000,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);
  function handleTop(){
    window.scrollTo({
      top:-1000
  })
  }
    

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

      <Link onClick={handleTop} to={'/'}>
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
      </div></Link>
      <ul>
        <li className="dropdown">منو های ما 
          <FaChevronDown  color='white' fontSize={'small'}/>
          <ul className="dropdown-ul">
           <Link to={'/foods/all/0'}> <li>همه منو ها</li></Link>
           <Link to={'/foods/pizza/1'}> <li>پیتزا</li></Link>
           <Link to={'/foods/hamburger/2'}> <li>همبرگر</li></Link>
           <Link to={'/foods/drinks/3'}> <li>نوشیدنی</li></Link>
           <Link to={'/foods/sandwich/4'} > <li>ساندویچ</li></Link>
          </ul>
        </li>
        <Link  style={{color:'white'}}> <li>بلاگ ما</li></Link>
       <Link style={{color:'white'}} to={'/'} >        <li>خانه</li>
</Link>
        <button className="btn-right">
          
          09056375314</button>
      </ul>
      <ToastComponent/>
    </nav>
    
  );
}

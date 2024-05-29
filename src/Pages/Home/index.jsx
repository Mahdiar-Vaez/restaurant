import React from "react";
import SwiperSec from "../../Components/Swiper";
import "./home.css";
import pizza from "../../assets/pizza.jpg";
import hambuger from "../../assets/hamburger.jpg";
import sandwich from "../../assets/sandwich.jpg";
import drink from "../../assets/drink.jpg";
import bannerPizza from '../../assets/banner-home-pizza.jpg'
import bannerBurger from '../../assets/banner-home-burger.jpg'
import bannerChicken from '../../assets/banner-home-chicken.jpg'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <SwiperSec />
      <div className="category section">
        <div className="category-items">
          {" "}
          <Link to={"./foods/pizza/1"}>
            <img src={pizza} alt="pizza category" />
          </Link>
        </div>
        <div className="category-items">
          {" "}
          <Link to={"./foods/sandwich/2"}>
            <img src={sandwich} alt=" sandwich category" />
          </Link>
        </div>
        <div className="category-items">
          {" "}
          <Link to={"./foods/hamburger/3"}>
            <img src={hambuger} alt="hamburger category" />
          </Link>
        </div>
        <div className="category-items">
          <Link to={"./foods/drinks/4"}>
            <img src={drink} alt="drinks category" />
          </Link>
        </div>
      </div>
      <div className="offers section">
        <div className="offer-items">
      
          <img src={bannerBurger} alt="برگر" />
          <h4>همبرگر مخلوط</h4>
          <span>تخفیف 30 درصد</span>
        </div>
        <div className="offer-items">
      
          <img src={bannerPizza} alt="پیتزا" />
          <h4>پیتزا یامی</h4>
          <span>نصف*نصف</span>
        </div>
        <div className="offer-items">
       
          <img src={bannerChicken} alt="چیکن" />
          <h4>جوجه میکس</h4>
          <span>ترد</span>
        </div>
      </div>
      <div className="hamburgers">

      </div>
    </>
  );
}

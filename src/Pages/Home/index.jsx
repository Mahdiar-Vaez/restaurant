import React, { useEffect, useState } from "react";
import SwiperSec from "../../Components/Swiper";
import "./home.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { RiEmpathizeFill } from "react-icons/ri";

import {
  pizza,
  hambuger,
  delivery,
  sandwich,
  drink,
  bannerBurger,
  bannerPizza,
  bannerChicken,
} from "./import";
import { Link } from "react-router-dom";
import { FaCableCar } from "react-icons/fa6";
export default function Home() {
  const [hamburger, setHamburger] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/hamburger");
        const data = await res.json();
        setHamburger(data);
      } catch (error) {
        alert("can not fetch");
      }
    })();
  }, []);
  const hamburgerItems = hamburger?.map((e, index) => {
    return (
      <Link to={`/food-detail/${e.id}/${e?.name.split(' ').join('-')}`}>
      <div className="hamburger-items">
        <img src={e?.img} alt={e?.name} />
        <span>{e?.price} تومان</span>
        <h5>{e?.name}</h5>
        <p>{e?.des}</p>
        <div>
          {" "}
          <button>سفارش</button>
        </div>
      </div></Link>
    );
  });
  return (
    <>
      <SwiperSec />
      <div className="category section">
        <div className="category-items">
          <h4>پیتزا ها</h4>{" "}
          <Link to={"./foods/pizza/1"}>
            <img src={pizza} alt="pizza category" />
          </Link>
        </div>
        <div className="category-items">
          {" "}
          <h4>ساندویچ ها</h4>
          <Link to={"./foods/sandwich/2"}>
            <img src={sandwich} alt=" sandwich category" />
          </Link>
        </div>
        <div className="category-items">
          {" "}
          <h4>همبرگر ها</h4>
          <Link to={"./foods/hamburger/3"}>
            <img src={hambuger} alt="hamburger category" />
          </Link>
        </div>
        <div className="category-items">
          <h4>نوشیدنی ها</h4>

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
      <div className="hamburgers section">{hamburgerItems}</div>
      <div className="delivery section">
        <div className="deliver-content">
          <h3>سریع و رایگان تحویل درب منزل</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <button>سفارش و تحویل آنلاین</button>
        </div>
        <div>
          <img src={delivery} alt="delivery image" />
        </div>
        <div className="deliver-content">
          <h3> نقطه راحت را انتخاب کن</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <button>نزدیک ترین شعبه رو پیدا کن</button>
        </div>
      </div>
      <div className="capabilities">
        <div>
        <RiEmpathizeFill color="red"/>
          <h5>خدمات منعطف</h5>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div>
          <BiSolidFoodMenu color="brown"/>
          <h5>منوهای اورجینال</h5>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div>
          <FaCarSide color="green"/>
          <h5> پارکینگ رایگان</h5>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
        <div>
          <MdOutlineDeliveryDining color="#ffca3c"/>
          <h5>تحویل فوری</h5>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        </div>
      </div>
      
    </>
  );
}

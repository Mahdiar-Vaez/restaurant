import React from "react";
import "./footer.css";
import cards from "../../assets/cards.png";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="section">
        <ul className="menu">
          <li>دسر</li>
          <Link  className="footer-link" to={"foods/drinks/4"}>
            {" "}
            <li> نوشیدنی ها </li>{" "}
          </Link>
          <li>میکس ها</li>
          <li>سالاد و مخلفات</li>
          <Link  className="footer-link"to={'foods/sandwich/2'}>
            {" "}
            <li>ساندویچ ها</li>
          </Link>{" "}
          <Link className="footer-link" to={'foods/hamburger/3'}>
            {" "}
            <li>برگر ها </li>
          </Link>{" "}
          <Link className="footer-link" to={'foods/pizza/1'}>
   
            <li>پیتزا</li>
          </Link>
        </ul>
        <div className="footer-sections">
          <div>
            <h5>پذیرنده تمامی کارت ها</h5>
            <img src={cards} alt="" />
          </div>
          <div>
            <h5>با ما در تماس باشید </h5>
            <ul>
              <li>شنبه تا پنجشنبه: 10:00 - 23:00</li>
              <li>خیابان آفریقا - کوچه کمان</li>
              <li>09056375314</li>
              <li>02191035407</li>
              <li>mahdyarvaez@gmail.com</li>
            </ul>
          </div>
          <div>
            <h5>دسترسی سریع</h5>
            <ul>
              <li>سفارشات من</li>
              <li>تسویه حساب</li>
              <li>پذیرایی</li>
              <li>شعب ما</li>
              <li>سیاست خط مشی</li>
            </ul>
          </div>
          <div>
            <h5>اطلاعات</h5>
            <ul>
              <li>درباره ما</li>
              <li>منوی ما</li>
              <li>بلاگ</li>
              <li>تماس با ما</li>
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p>
          تمامی حقوق این سایت محفوظ است. ساخته شده توسط mahdyarvaez@gmail.com
        </p>
        <div>
          <a   className="footer-link" href="https://t.me/MAHDIARVAEZ">
            <FaTelegramPlane />
          </a>
          <a  className="footer-link" href="https://mahdyarvaez@gmail.com">
            {" "}
            <MdEmail />
          </a>

          <a  className="footer-link" href="https://www.linkedin.com/in/mahdyar-vaez-ab39652ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            {" "}
            <FaLinkedin />
          </a>
          <a  className="footer-link" href="https://instagram.com/mahdiarvaez">
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

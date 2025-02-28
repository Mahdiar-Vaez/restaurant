import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getUser, removeUser } from "../../redux/authSlide";
import Links from "./Links";
import Swal from "sweetalert2";
export default function Navbar() {
  const listLength = useSelector((state) => state.cart.list).length;
  const favoriteLength=useSelector((state)=>state.favorite.favoriteList).length
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navType = useNavigationType();
  const [scale, setScale] = useState(false);
  const [distanceFromTop, setDistanceFromTop] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDistanceFromTop(window.scrollY);
    });
    if (distanceFromTop === 0) setScale(true);
    else setScale(false);
  }, [distanceFromTop]);
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: -1000,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);
  function handleTop() {
    window.scrollTo({
      top: -1000,
    });
  }
  function handleLogOut() {
    Swal.fire({
      title: "خروج از حساب",
      text: "آیا میخواهید از حساب خود خارج شوید ممکن است اطلاعات شما از  بین برود",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله !",
      cancelButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeUser());
        Swal.fire({
          title: "شما از حساب خارج شدید!",

          icon: "success",
        });
        localStorage.removeItem(JSON.parse('"user"'));
        dispatch(removeUser());
      }
    });
  }
  useEffect(() => {
    const userStorage = localStorage.getItem(JSON.parse('"user"'));
    if (userStorage) {
      dispatch(getUser({ user: userStorage, token: "from-storage" }));
    }
  }, []);
  return (
    <>
      <Links
        listLength={listLength}
        handleLogOut={handleLogOut}
        user={user}
        scale={scale}
        handleTop={handleTop}
      />
      <nav className="section">
        <div className="right-nav-icons">
          <Link className="cart-icon" style={{color:'black'}} to={'/favorite'}>
          {favoriteLength > 0 ? <span>{favoriteLength}</span> : ""}
          <MdFavoriteBorder  className="favorite"/>    </Link>
          <Link className="cart-icon" style={{ color: "black" }} to={"/cart"}>
            <CiShoppingCart  className="cart-svg"/>
            {listLength > 0 ? <span>{listLength}</span> : ""}
          </Link>
        </div>

        <ul className="nav-links">
          <Link style={{ color: "white" }}>
            <li>تماس با ما</li>
          </Link>
          <Link to={"/foods/all/0"} style={{ color: "white" }}>
            {" "}
            <li>سفارش آنلاین</li>
          </Link>
          {user ? (
            <li style={{ cursor: "pointer" }} onClick={handleLogOut}>
              خروج از حساب{" "}
            </li>
          ) : (
            <Link to={"/login-register"} style={{ color: "white" }}>
              {" "}
              <li>ورود </li>
            </Link>
          )}
        </ul>

        <Link onClick={handleTop} to={"/"}>
          <div
            className="shape"
            style={{
              transform: scale ? "scale(0.8)" : "",
            }}
          >
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
        </Link>
        <ul className="nav-links">
          <li className="dropdown">
            منو های ما
            <FaChevronDown color="white" fontSize={"small"} />
            <ul className="dropdown-ul">
              <Link to={"/foods/all/0"}>
                {" "}
                <li>همه منو ها</li>
              </Link>
              <Link to={"/foods/pizza/1"}>
                {" "}
                <li>پیتزا</li>
              </Link>
              <Link to={"/foods/hamburger/2"}>
                {" "}
                <li>همبرگر</li>
              </Link>
              <Link to={"/foods/drinks/3"}>
                {" "}
                <li>نوشیدنی</li>
              </Link>
              <Link to={"/foods/sandwich/4"}>
                {" "}
                <li>ساندویچ</li>
              </Link>
            </ul>
          </li>
       
        </ul>
      </nav>
    </>
  );
}

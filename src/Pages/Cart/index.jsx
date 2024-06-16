import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "../../redux/CartSlice";
export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const listItems = list?.map((e, index) => {
    return (
      <div key={index} class="item">
        <span class="total-price">{e?.price * e?.quantity}تومان</span>

        <div class="image">
          <img src={e?.img} alt={e?.name} />
        </div>

        <div class="description">
          <span>{e?.name}</span>
          <span>{e?.price}</span>
        </div>

        <div class="quantity">
          <button onClick={()=>dispatch(addItem(e))} class="plus-btn" type="button" name="button">
            +
          </button>
          <input type="text" name="name" value={e?.quantity} />
          <button onClick={()=>dispatch(removeItem(e?.id))} class="minus-btn" type="button" name="button">
            -
          </button>
        </div>
      </div>
    );
  });

  return (
    listItems.length>0?(
    <>
    <div className="cart">
       
      <div class="shopping-cart">
        <div class="title">سبد خرید</div>
        {listItems}
      </div>   <div class="total">
        <span>جمع کل</span>
        <span>
          {list?.reduce((a, b) => a + b?.price * b?.quantity, 0)+'000'}تومان
        </span>
        <Link style={{
          padding:'10px'
          ,color:'black',
          backgroundColor:'var(--bg-reding)',
          borderRadius:'10px',
          marginBottom:'20px',
      
            
              
          
        }} to={'*'}>تسویه حساب</Link>
      </div>
      </div>
    </>):
    <>
    <div className="empty">
      <h3>سبد خرید شما خالی میباشد </h3>
      <Link to="/foods/all/0">
        منوی رستوران
      </Link>
    </div>
    </>
    
  );
}

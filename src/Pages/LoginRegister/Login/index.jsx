import React, { useContext, useEffect, useState } from 'react'
import '../login-register.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useFormFields from '../../../utils/UseFormFields';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/authSlide';
import ToastComponent from '../../../Components/Toast/Toast';
import { toast } from 'react-toastify';
import { json } from 'react-router-dom';
export default function Login({handleUser}) {


  const dispatch=useDispatch()

  const [fields,handleFields]=useFormFields()
  function generateRandomHashCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }
  
  let [random,setRandom]=useState();
  useEffect(()=>{   setRandom( generateRandomHashCode())},[])
  async function handleSubmit(e) { 
    e?.preventDefault()
  
    const res = await fetch('https://mahdiar-vaez.github.io/host-restaurant/data.json')
  
    const data = await res.json()
    
    if (data?.users && data?.users?.length > 0) {
      const user = data?.users?.find(
        (user) => user.username === fields.username && user.password === fields.password
      )
  
      if (user) {
        const toastId = toast.success('ورود موفقیت آمیز بود', { autoClose: false });
        setTimeout(() => {
          dispatch(getUser({ user: user, token: random }));
        }, 1000);
        localStorage.setItem("user",JSON.stringify(user?.username))
      } else {
        toast.error('نام کاربری اشتباه است')
      }
    } else {
      toast.error('کاربری با این مشخصات یافت نشد')
    }
  }
   
  
  
   const [eye, setEye] = useState(false)
   function handleEye(){
    setEye(!eye)
   }
  return (
    <form onSubmit={handleSubmit} action="">
    <div className='login'>
      <div className='login-register-overlay'> </div>
      <p className='warning'>
        به دلیل مشکلات به وجود آمده در هاست امکان ثبت نام وجود ندارد لطفا 
        نام کاربری خود را : ali و رمز عبور را : 123 وارد کنید
        یا هم میتوانید با مراجعه به لینک 
   
      <a style={{color:'blueviolet'}} href="https://mahdiar-vaez.github.io/host-restaurant/data.json" > هاست گیت هاب </a>
      اسامی و نام های مجاز را پیدا کرده و وارد شوید 
      این صرفا جهت تست است و کاربرد دیگر ندارد
         </p>  <h3>
            ورود 
        </h3>
        <label  htmlFor='username' >نام کاربری خود را وارد کنید *</label>
        <input  onChange={handleFields} type="text" id='username' required name='username'  />
        <label htmlFor='password'>گذرواژه *</label>
        <div className='password'>
        <input  onChange={handleFields} id='password' required name='password' type={!eye?'password':'text'} ></input>
          <span className='eye'>
        {eye?
      <FaRegEye onClick={handleEye}/>:
      <FaRegEyeSlash onClick={handleEye}/>  
      }
        </span></div> <label htmlFor='remember'>مرا به خاطر بسپار</label>
        <input className='check-box' type="checkbox" id='remember' name='remember' />
        <p className='change-registration' style={{cursor:'pointer'}} onClick={handleUser}>حساب کاربری نداری ؟ ثبت نام کن</p>
        <button type='submit'>
            ادامه
        </button>
    </div>
      <ToastComponent/>
    </form>
  )
}

import React, { useState } from 'react'
import '../login-register.css'

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useFormFields from '../../../utils/UseFormFields';
import { toast } from 'react-toastify';
import ToastComponent from '../../../Components/Toast/Toast';
export default function Register({handleUser}) {
  const [eye, setEye] = useState(true)
  const [fields,handleFields]=useFormFields()
 async function handleSubmit(e){
    e.preventDefault()
   
    try {
      const existingUsersResponse = await fetch('http://localhost:3001/users');
      const existingUsers = await existingUsersResponse.json();

      const userExists = existingUsers.some(user => user.username ===fields.username);

      if (userExists) {
        toast.error('نام کاربری وجود دارد. لطفاً نام کاربری دیگری انتخاب کنید.');
        return;
      }

      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fields)
      });

      const data = await response.json();

      toast.success('با موفقیت ثبت نام کردید');
      setTimeout(() => {
        handleUser();
      }, 1500);
    } catch (error) {
      toast.error('مشکلی با اطلاعات شما پیش اومده');
    }
  
 }
  return (
    
 
      <form onSubmit={handleSubmit} action="">
      <div className='login'>
  
          <h3>
              ثبت نام  
          </h3>
          <label htmlFor='username' >نام کاربری خود را وارد کنید *</label>
          <input  onChange={handleFields} type="text" id='username' required name='username'  />
          <label htmlFor='password'>گذرواژه *</label>
          <div className='password'>
          <input onChange={handleFields} id='password' required name='password' type={eye?'password':'text'} />
            <span className='eye'>
          {eye?
        <FaRegEye onClick={()=>setEye(!eye)}/>:
        <FaRegEyeSlash onClick={()=>setEye(!eye)}/>  
        }
          </span></div>
          <label htmlFor="">ایمیل</label>
          <div className='password'>
          <input onChange={handleFields} id='email' type='email' required name='email' />
          </div>
           <label htmlFor='remember'>مرا به خاطر بسپار</label>
          <input className='check-box' type="checkbox" id='remember' name='remember' />
          <p style={{cursor:'pointer'}} onClick={handleUser}>حساب کاربری داری ؟  وارد شو</p>
          <button  type='submit'>
              ادامه
          </button>
      </div>
      <ToastComponent/>
      </form>
    )  
}

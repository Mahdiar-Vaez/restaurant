import React, { useEffect, useState } from 'react'
import '../login-register.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import useFormFields from '../../../utils/UseFormFields';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/authSlide';
import ToastComponent from '../../../Components/Toast/Toast';
export default function Login({handleUser}) {
  const [toastify,setToast]=useState({
    type:'',
    message:'',
    
  })
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

  
    
      const res = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    
      const data = await res.json()
    
      if (data && data.length > 0) {
        const user = data?.find(
          (user) => user.username === fields.username && user.password === fields.password
        )
    
        if (user) {
          setToast({
            type:'success',
            message:'با موفقیت وارد شدید'
          })
          
          dispatch(getUser({user:user,token:random}))
          
          
          
        } else {
          setToast({
            type:'error',
            message:'رمز عبور یا نام کاربری یافت نشد'
          })
          
        }
      } else {
      setToast({
        type:'error',
        message:'کاربری با این مشخصات یافت نشد'
      })
      }
    }
   
  
  
   const [eye, setEye] = useState(false)
   function handleEye(){
    setEye(!eye)
   }
  return (
    <form onSubmit={handleSubmit} action="">
    <div className='login'>

        <h3>
            ورود 
        </h3>
        <label  htmlFor='username' >نام کاربری خود را وارد کنید *</label>
        <input onChange={handleFields} type="text" id='username' required name='username'  />
        <label htmlFor='password'>گذرواژه *</label>
        <div className='password'>
        <input onChange={handleFields} id='password' required name='password' type={!eye?'password':'text'} ></input>
          <span className='eye'>
        {eye?
      <FaRegEye onClick={handleEye}/>:
      <FaRegEyeSlash onClick={handleEye}/>  
      }
        </span></div> <label htmlFor='remember'>مرا به خاطر بسپار</label>
        <input className='check-box' type="checkbox" id='remember' name='remember' />
        <p style={{cursor:'pointer'}} onClick={handleUser}>حساب کاربری نداری ؟ ثبت نام کن</p>
        <button type='submit'>
            ادامه
        </button>
    </div>
    <ToastComponent  type={toastify.type} message={toastify.message} />
    </form>
  )
}

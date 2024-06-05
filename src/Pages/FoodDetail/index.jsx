import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import './food-detail.css'
export default function FoodDetail() {
  const [food,setFood]=useState()
  const [loading,setLoading]=useState(false)
  const {id}=useParams()
  console.log(id)
  useEffect(()=>{
    (async()=>{
      try {
        setLoading(true)
          const res=await fetch(`  http://localhost:3001/all/${id}`)
      const data=await res.json()
      setFood(data)
      console.log(data)
      setLoading(false)
      } catch (error) { 
        setLoading(false)
        alert(error)
       
      }
    
      

    })()
  },[])
  return (
    <div className='detail section'>
        {loading? <div className='loading'>
        <Hourglass
          visible={true}
          height="200"
          width="200"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#ffca3c', '#f2002d']}
        />
      </div>
        
          :
          <div className='food-detail'>
            <img src={food?.img} alt={food?.name} />
            <h3>{food?.name}</h3>
            <p>{food?.des}</p>
            <p className='price'> {food?.price}تومان</p>
              <button> افزودن به سبد خرید</button>
          </div> }
    </div>
  )
}

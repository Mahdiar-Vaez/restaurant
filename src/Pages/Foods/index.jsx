import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './foods.css'
import { Hourglass } from 'react-loader-spinner'
export default function Foods() {
  const[foods,setFoods]=useState()
  const [loading,setLoading]=useState(true)
  const {name}=useParams()
  console.log(name)
 
  useEffect(()=>{

    (async()=>{
      try {
       const res=await fetch(`http://localhost:3001/${name}`)
      const data=await res.json()
      setFoods(data)
      setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error)
      }
  
    })()

  },[name])
  const foodsItems=foods?.map((e,index)=>(
    <div key={index} className='food-card'>
      <img  src={e?.img} alt='' />
      <h4>{e?.name}</h4>
      <p>{e?.des}</p>
      <span>{e?.price}تومان</span>
    <Link to={`/food-detail/${e?.id}/${e?.name.split(' ').join('-')}`}>سفارش </Link>
    </div>
  ))
  return (
    <div className='foods section'>
      {loading?<div className='loading'>
        <Hourglass
          visible={true}
          height="200"
          width="200"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#ffca3c', '#f2002d']}
        />
      </div>:<div className='foods-section'>
          {foodsItems}
         </div>}

    </div>
  )
}

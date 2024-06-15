import React, { useEffect, useState } from 'react'
import { Hourglass } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import './food-detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/CartSlice';

export default function FoodDetail() {
  const dispatch = useDispatch()
  const [food, setFood] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const quantity = useSelector((state) => state.cart.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
    console.log(quantity)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:3001/all/${id}`)
        const data = await res.json()
        setFood(data)
        console.log(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert(error)
      }
    })()
  }, [])

  return (
    <div className='detail section'>
      {loading ? (
        <div className='loading'>
          <Hourglass
            visible={true}
            height='200'
            width='200'
            ariaLabel='hourglass-loading'
            wrapperStyle={{}}
            wrapperClass=''
            colors={['#ffca3c', '#f2002d']}
          />
        </div>
      ) : (
        <div className='food-detail'>
          <img src={food?.img} alt={food?.name} />
          <h3>{food?.name}</h3>
          <p>{food?.des}</p>
          <p className='price'>{food?.price} تومان</p>
          <div className='buttons'>
            <button onClick={() => dispatch(addItem(food))}>
              افزودن به سبد خرید
              <span>
                <IoIosAdd />
              </span>
            </button>
            <button style={{
              backgroundColor:quantity==undefined?'grey':'var(--bg-secondary) !important'
            }} disabled={quantity>0 ? false :true}  onClick={() => dispatch(removeItem(food.id))}>
              کم کردن به سبد خرید
              <span>
                <IoIosRemove />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
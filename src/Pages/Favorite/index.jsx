import React, { useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeAllFavorite, removeFavorite } from '../../redux/FavoriteSlice'
import { Link } from 'react-router-dom'
export default function Favorite() {
    const {favoriteList}=useSelector((item)=>item.favorite)
    const dispatch=useDispatch()
  
    console.log(favoriteList)
  return (
    <div className='favorite-container'>
       {!favoriteList.length>0 ? <><h1 style={{alignSelf:'center',marginTop:40,justifySelf:'center'}} className='title-empty'>
     لیست مورد علاقه های شما خالی میباشد

       </h1>
      
       </>:  <div className='favorites'>
          {favoriteList?.map((item)=>{
            return    <div className='favorite-item'>
                <div className='fav-img'> 
                  <img src={item?.img} alt="" />
                </div>
                <div className='fav-content'>
                  <h3>{item?.name}</h3>
                  <p>{item.des}</p>
                  <button  onClick={()=>{
                                            localStorage.setItem('favoriteList', JSON.stringify(favoriteList.filter((f) => f.id!== item.id)))

                        dispatch(removeFavorite(item))
                    }}>
                    حذف از علاقه مندی ها
                 
                  </button>
                </div>
            </div>

          })
        }
            
            

        </div>}
      
    </div>
  )
}

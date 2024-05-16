import React from 'react';
import restaurant from '../Data/restaurantChains';
import Start from './Start';


function Card(props) {

  return (
    <>
        <div className='w-[300px] shrink-0 grow'>
        <div className='group h-[190px] rounded-[15px] overflow-hidden relative mx-3'>
        <img  className='group-hover:scale-110 duration-150 object-cover h-full w-full' src={ props.image} alt=""/>  
        <div className=' image-overlay absolute w-full h-full top-0 flex items-end tracking-tighter p-2 text-[20px] font-bold text-white'>
         {props.offer} </div>   
         </div>
         <div className='mt-2 mx-3 font-semibold'>
         <div className='text-[18px] font-serif'>{props.title}</div>
         <Start className='inline'/> {props.rating} <span> • </span>
         <div className='inline'>{props.minTime}-{props.maxTime} mins </div>
         <div className='text-gray-500 '>
         <div>{props.name}</div>
         <div>{props.place}</div>
         </div>
         </div>

         
        </div>
    </>
  )
}

export default Card
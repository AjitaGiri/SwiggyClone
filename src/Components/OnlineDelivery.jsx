import React, { useState } from 'react';
import restaurant from '../Data/restaurantChains';
import Card from './Card';

function OnlineDelivery() {

    const [categori,setCategori]= useState(restaurant);

  return (
    <>
        <div className='max-w-[1200px] mx-auto '>

<div className='flex items-center justify-between my-2'>
 
 <div className='font-bold text-[25px] '>
Restaurants with online food delivery in Delhi</div>
</div>
<div className='grid grid-cols-4 gap-3'>
{
    categori.map((data,index)=>{return (<Card {...data} key={index}/>)})
}
</div>
</div>
    </>
  )
}

export default OnlineDelivery
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import restaurant from '../Data/restaurantChains';
import Card from './Card';

function TopRestau() {

    const [categori,setCategori]= useState(restaurant);

    const [slider,setSlider] = useState(0);


   const rightSlide = ()=>{
      if(slider == categori.length-4) return false;
      setSlider(slider+2);
   }

   const leftSlide = ()=>{
      if(slider==0) return false;
      setSlider(slider-2);
   }

  return (
    <>
        <div className='max-w-[1200px] mx-auto '>

<div className='flex items-center justify-between my-2'>
 
 <div className='font-bold text-[25px] '>Top restaurant chain in Delhi</div>
 
 <div className='flex'> 
 <div className='cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' onClick={leftSlide}> <FaArrowLeft /> </div>
 <div className='cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' onClick={rightSlide}>  <FaArrowRight /> </div>
 </div>
</div>

<div className='flex  overflow-hidden'>
{categori.map((items,index)=>{return (<Card key={index} {...items} style={{transform: `translateX(-${slider * 100}%)`}} className='w-[172px] shrink-0 duration-500'/>)})}
</div>

<hr className='border-[1.5px] my-5'/>

</div>
    </>
  )
}

export default TopRestau;
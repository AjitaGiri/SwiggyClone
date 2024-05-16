import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import category from '../Data/category';


function Category() {
    const [categories,setCategories]= useState(category);

    const [slide,setSlide] = useState(0);

   //  useEffect(()=>{ 
   //        async function fetchData(){
   //          const response= await fetch("http://localhost:5000/categories");
   //          const data = await response.json();
   //          setCategories(data);
   //       }
   //      fetchData();
   //   },[]);

   const rightShow = ()=>{
      if(slide == categories.length-7) return false;
      setSlide(slide+3);
   }

   const leftShow = ()=>{
      if(slide==0) return false;
      setSlide(slide-3);
   }

  return (
   <>
   <div className='max-w-[1200px] mx-auto '>

   <div className='flex items-center justify-between my-2'>
    
    <div className='font-bold text-[25px] '>What's on your mind?</div>
    
    <div className='flex'> 
    <div className='cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' onClick={leftShow}> <FaArrowLeft /> </div>
    <div className='cursor-pointer w-[40px] h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center' onClick={rightShow}>  <FaArrowRight /> </div>
    </div>
   </div>

   <div className='flex  overflow-hidden'>
    {categories.map(
      (items,index)=>{return (
      <div style={{transform: `translateX(-${slide * 100}%)`}} key={index} 
     className='w-[172px] shrink-0 duration-500'> 
     <img src= {items.img} /> </div>)})}
   </div>

<hr className='border-[1.5px] my-5'/>


</div>
   </>
  )
}

export default Category
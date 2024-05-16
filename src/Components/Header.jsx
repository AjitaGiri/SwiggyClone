import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { IoHelpBuoyOutline } from "react-icons/io5";

function Header() {
    const [toggle,setToggle]=useState(false);

    const showSideMenu= ()=>{
        setToggle(true);
    }

    const hideSideMenu=()=>{
      setToggle(false);
    }

    const links= [
      {
        icon: <CiSearch />,
        name:"Search" 
      },

      {
        icon: <BiSolidOffer />,
        name:"Offers"
    },
    {
      icon: <IoHelpBuoyOutline />,
      name:"Help "
    },
    {
      icon:<IoPersonOutline />,
      name:"Signin"
    },
    {
  icon: <BsMinecart />,
  name:"Cart"
}]

  return (

    <>
  <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} 
  style={{
    opacity: toggle? 1:0,
    visibility: toggle? "visible":"hidden"
  }}>

    <div onClick= {(event)=>{event.stopPropagation()}} className='w-[600px] bg-white h-full absolute duration-[400ms]' 
    style={{left: toggle? '0%': '-100%'}}>
    </div>
  </div> 

    <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
    <div className='max-w-[1200px] mx-auto  flex items-center'>
    
    <div className='w-[100px]'>
    <img src="images/logo.png" alt="logo" className="w-full"/>
    </div>

    <div className=""> <span className="font-bold border-b-[4px] border-[black] text-[#686b78]">New Delhi </span> Delhi,India
 <RxCaretDown onClick={showSideMenu}fontSize={25} className=' font-bold inline  text-[#fc8019]'/>
    </div>

<nav className='flex gap-5 list-none  ml-auto font-semibold text-[18px]'>
 
 {links.map( (link,index)=>
  {return <li key={index} className=' cursor-pointer flex hover:text-[#fc8019] items-center gap-2 mx-7 '> {link.icon} {link.name}</li> 
 })}


</nav>
    </div>
  
  
  
  </header>
  </>
  )
}

export default Header
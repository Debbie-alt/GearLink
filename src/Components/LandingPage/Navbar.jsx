import React, { useState } from "react";
import {AlignLeft} from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [navbar, setNavbar] = useState('hidden')
  return (
    <nav className="  flex justify-between w-full text-white">
        <div  className="font-thin sm:hidden cursor-pointer" onClick={()=>{
        open == false ?
        setNavbar('flex') :  setNavbar('hidden');
          setOpen(!open);}}>
        <AlignLeft size={22} />
        </div>

          <p className="text-lg font-bold"> GearLink</p>


          <div className={`md:flex md:flex-row dropdown w-[70vw] md:w-[40vw] items-center flex-col rounded-lg md:text-white  py-5 px-5 md:p-0 mt-7 md:mt-2 bg-black border-2 md:border-0 absolute md:relative md:bg-transparent justify-between md:space-y-0 h-[80vh] md:h-0  md:space-x-6 ${navbar}  text-xs md:text-sm `}>
          
        
          <a href="" className="hover:opacity-90 hover:text-yellow-300 "  >Home</a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> How it works</a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> Vendor </a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> Pricing </a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> About Us</a>
        </div>

           
        <a
          href=""
          role="button"
          className="bg-yellow-500 w-[30%] md:w-[10%] text-center py-2 rounded-lg text-black font-semibold tracking-tight font-serif -my-2 hover:bg-yellow-600">
          Sign Up
        </a>

        
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [navbar, setNavbar] = useState('hidden')
  return (
    <nav className="bg-transparent w-full  text-white">

      <div className="flex py-3 text-white justify-between">
      <p className="text-lg font-bold "> <span className="font-thin sm:hidden cursor-pointer" onClick={()=>{
        open == false ?
        setNavbar('flex') :  setNavbar('hidden');
          setOpen(!open);
         
      }}>&#9776;</span> &nbsp;GearLink</p>

    
        <div className={`sm:flex sm:flex-row  items-center flex-col rounded-lg sm:text-white py-5 px-10 sm:p-0 mt-7 sm:mt-0 bg-black border-2 sm:border-0 absolute sm:relative sm:bg-transparent space-y-5  sm:space-y-0 h-1/2 sm:h-0 sm:space-x-6 ${navbar}  text-xs md:text-sm`}>
          <a href="" className="hover:opacity-90 hover:text-yellow-300 "  >Home</a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> How it works</a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> Vendor </a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> Pricing </a>
          <a href="" className="hover:opacity-90 hover:text-yellow-300"> About Us</a>
        </div>
        <a
          href=""
          role="button"
          className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold tracking-tight font-serif -my-2 hover:bg-yellow-600"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

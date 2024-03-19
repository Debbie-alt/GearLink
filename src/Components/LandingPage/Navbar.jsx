import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full  text-white">

      <div className="flex py-3 text-white justify-between">
      <p className="text-lg font-bold "> <span className="font-thin sm:hidden">&#9776;</span> &nbsp;GearLink</p>

    
        <div className="sm:flex space-x-6 hidden  text-xs md:text-sm">
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

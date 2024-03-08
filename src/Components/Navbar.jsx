import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full  text-white">
      <div className="flex py-3 text-white justify-evenly md:justify-between">
        <p className="text-lg font-bold ">GearLink</p>
        <div className="flex space-x-6  text-xs md:text-sm">
          <a href="">Home</a>
          <a href="">How it works</a>
          <a href="">Vendor </a>
          <a href="">Pricing </a>
          <a href="">About Us</a>
        </div>
        <a
          href=""
          role="button"
          className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold tracking-tight font-serif -my-2"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import featuresObject from "../../Objects";

const Features = () => {
  return (
    <section className="w-screen h-auto p-20 space-y-14 flex flex-col ">
      <div className="flex flex-col text-center space-y-4">
        <h1 className="font-bold text-xl">Features</h1>
        <p>
          Discover the power of our automobile marketplace platform designed to
          revolutionize the way independent
          <br /> automobile vendors and buyers connect. Explore a comprehensive
          suite of features carefully crafted <br /> to streamline your business
          operations and enhance your purchasing experience
        </p>
        <button className="bg-yellow-400 self-center font-semibold  rounded-lg p-2 text-black w-1/6 shadow-lg  shadow-yellow-800">
          Learn More
        </button>
      </div>
      
        <figure className="grid grid-cols-3 space-y-8 space-x-4 w-full items-center  ">
        {featuresObject.map((grids) => (
          <div className="card  shadow-xl  space-y-2 rounded-md  border-2 mt-8 px-3 py-5 ">
            <h1 className="font-bold">{grids.id}</h1>
            <p className="font-bold">{grids.title} </p>
            <p className="text-sm font-serif">{grids.content}</p>
          </div>
             ))}
        </figure>
    </section>
  );
};
export default Features;
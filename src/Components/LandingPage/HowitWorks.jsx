import car from "../../assets/topcar-original.png";
import Typed from 'typed.js';
import { useEffect } from "react";
import { useRef } from "react";

const HowitWorks = () => {

  const eli = useRef(null);

  useEffect(() => {
    const typed = new Typed(eli.current, {
      strings: [' Discover the power of our automobile marketplace platform designed to revolutionize the  way independent automobile vendors and buyers connect'],
      typeSpeed: 80,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="bg-yellow-400  w-screen  p-10 mt-24 " id="howitWorks">
      <div className="text-center space-y-3">
        <h1 className="font-bold font-sora">How it Works</h1>
        <p className=" font-roboto  text-sm md:text-lg text-center w-[60vw] mx-auto " ref={eli}>
         
        </p>
        <button className="text-white font-bold  font-roboto py-2 px-3 bg-black rounded-lg">
          Learn More
        </button>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mt-3">
        <figure className="  space-y-5 space-x-2">
          <h2 className="text-black font-bold ">For Vendors</h2>

          <div className="flex space-x-2 ">
          <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                i
              </figure>
            <div>
            <h4 className="text-black font-bold">List your inventory</h4>
            <p className="text-[14px] ">
              {" "}
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
            </div>
           
          </div>

          <div className="flex space-x-2">
          <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                i
              </figure>
           <div>

            <h4 className="text-black font-bold">Manage Listings</h4>
            <p className="text-[14px] ">
              {" "}
              Edit, update or remove listings as needed to keep your inventory current and attractive to potential buyers.
            </p>
          </div>
          </div>

          <div className="flex space-x-2">
            <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                  i
                </figure>
            <div>
              <h4 className="text-black font-bold">Communicate with buyers</h4>
              <p className="text-[14px] ">
                {" "}
                Use the integrated messaging system to communicate with potential buyers, answer inquiries
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
          <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                i
              </figure>
          <div>
            <h4 className="text-black font-bold">Track Performance</h4>
            <p className="text-[14px] ">
              Monitor your sales performance, view analytics on customer demographics, track service ratings and gather valuable insights to optimize your  business strategy and provide excellent customer service.
            </p>
          </div>
          </div>

        </figure>

        {/* CAR PHOTO */}
        <figure className="space-x-5 space-y-5">
          <div>
            <img src={car} alt="" />
          </div>
        </figure>

        {/* FOR BUYERS */}
        <figure className="space-y-5 space-x-5">
          <h2 className="text-black font-bold">For Buyers</h2>

          <div className="flex space-x-2">
            <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                  i
                </figure>
            <div>
              <h4 className="text-black font-bold">Explore marketplace and vendors</h4>
              <p className="text-[14px] ">
                Browse through a diverse selection of automobile from various vendors filtered by brand, model, price, range, and other preferences.  </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
              <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                    i
              </figure>
            <div>
              <h4 className="text-black font-bold">
                View Product Details
              </h4>
              <p className="text-[14px] ">
                Add automobile to your inventory by providing detailed information
                such as brand, model, year, mileage, price and high qualty images
              </p>
            </div>
          </div>
          

          <div className="flex space-x-2">
            <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                  i
            </figure>
            <div>
            <h4 className="text-black font-bold">Communicate with vendors</h4>
            <p className="text-[14px] ">
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          </div>

          <div className="flex space-x-2">
              <figure className="bg-white px-2.5 py- h-[28%] rounded-md">
                    i
              </figure>
            <div>
              <h4 className="text-black font-bold">Track your order</h4>
              <p className="text-[14px] ">
                Add automobile to your inventory by providing detailed information
                such as brand, model, year, mileage, price and high qualty images
              </p>
            </div>
          </div>
        </figure>
        {/* FOR VENDORS END */}
      </section>
    </section>
  );
};

export default HowitWorks;

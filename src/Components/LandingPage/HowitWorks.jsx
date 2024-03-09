import car from '../../assets/topcar-original.png'

const HowitWorks = () => {
  return (
    <section className="bg-yellow-400  w-screen  p-10 ">
      <div className="text-center space-y-3">
        <h1 className="font-semibold">How it Works</h1>
        <p className='text-sm'>
          Discover the power of our automobile marketplace platform designed
          revolutionize the <br />
          way independent automobile vendors and buyers connect
        </p>
        <button className="text-white font-semibold py-2 px-3 bg-black rounded-lg">
          Learn More
        </button>
      </div>
      <section className="grid grid-cols-3 justify-between mt-3">
        <figure className="  space-y-5 space-x-5">
          <h2 className="text-black font-semibold ">For Vendors</h2>

          <div>
            <h4 className="text-black font-semibold">List your inventory</h4>
            <p className='text-sm'>
              {" "}
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          <div>
            <h4 className="text-black font-semibold">List your inventory</h4>
            <p className='text-sm'>
              {" "}
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          <div>
            <h4 className="text-black font-semibold">List your inventory</h4>
            <p className='text-sm'>
              {" "}
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          <div>
            <h4 className="text-black font-semibold">List your inventory</h4>
            <p >
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
        </figure>

        {/* CAR PHOTO */}
        <figure className="space-x-5 space-y-5">
          <div>
           <img src={car} alt="" />
          </div>
        </figure>
              
              
              {/* FOR VENDORS */}
        <figure className="space-y-5 space-x-5">
          <h2 className="text-black font-semibold">For Vendors</h2>
          <div>
            <h4 className="text-black font-semibold">List your inventory</h4>
            <p className='text-sm'>
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          <div>
            <h4 className="text-black font-semibold">Communicate with vendors</h4>
            <p className='text-sm'>
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>
          <div>
            <h4 className="text-black font-semibold">Track Performance</h4>
            <p className='text-sm'>
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div> <div>
            <h4 className="text-black font-semibold">Track your orders</h4>
            <p className='text-sm'>
              Add automobile to your inventory by providing detailed information
              such as brand, model, year, mileage, price and high qualty images
            </p>
          </div>

        </figure>
           {/* FOR VENDORS END */}
     
      </section>
    </section>
  );
};

export default HowitWorks;

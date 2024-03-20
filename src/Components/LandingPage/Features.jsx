import {useEffect} from "react";
import featuresObject from "../../Objects";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Features = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="w-screen h-auto p-20 space-y-14 flex flex-col ">
      <div className="flex flex-col text-center space-y-4" >
        <h1 className="font-bold  text-xl heading" data-aos="fade-right" data-aos-delay="200">Features</h1>
        <p className="font-roboto text-center text-sm sm:text-lg" data-aos="fade-right" data-aos-delay="500" >
          Discover the power of our automobile marketplace platform designed to
          revolutionize the way independent
           automobile vendors and buyers connect. Explore a comprehensive
          suite of features carefully crafted to streamline your business
          operations and enhance your purchasing experience
        </p>
        <button className="bg-yellow-400 self-center font-semibold  rounded-lg p-2 text-black  w-1/2 lg:w-1/6 shadow-lg  shadow-yellow-800 font-roboto" data-aos="fade-left" data-aos-delay="400">
          Learn More
        </button>
      </div>
      
        <figure className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 space-x-4 w-full items-center  ">
        {featuresObject.map((grids) => (
          <div className="card  shadow-xl  space-y-2  rounded-md  border-2 mt-8 px-3 py-5 " data-aos="fade-left" data-aos-delay="200">
            <h1 className="font-bold heading">{grids.id}</h1>
            <p className="font-bold heading">{grids.title} </p>
            <p className="text-sm font-roboto ">{grids.content}</p>
          </div>
             ))}
        </figure>
    </section>
  );
};
export default Features;

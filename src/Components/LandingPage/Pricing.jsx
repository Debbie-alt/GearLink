import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PricingType } from "../../Objects";
import Typed from 'typed.js';
import { useEffect } from "react";
import { useRef } from "react";

const Pricing = () => {
  const el = useRef(null);



  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Flexible Pricing plans to suit your business needs', 'Choose the Plan that works best for you'],
      typeSpeed: 80,
      showCursor:false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className=" bg  py-5  mt-20 flex flex-col space-y-10  w-full">
      <div className="text-center text-white ">
        <h1 className=" font-bold text-lg ">Pricing</h1>
        <p className="font-semibold " ref={el}>
          {/* Flexible Pricing plans to suit your business needs. Choose the Plan
          that works best for you */}
        </p>
      </div>

      <section className=" w-[90vw] mx-auto flex flex-col md:flex-row space-x-5 text-white border-2  border-slate-400 p-10 md:p-6 rounded-md">
        {PricingType.map((pricings) => (
          <figure className="flex flex-col space-y-2">
            <h1>{pricings.id}</h1>
            <h1 className="font-bold  text-xl heading">{pricings.title}</h1>
            <p className="font-roboto">{pricings.Desc}</p>
            <IoMdCheckmarkCircleOutline className="text-yellow-500" />
            <IoMdCheckmarkCircleOutline className="text-yellow-500" />
            <IoMdCheckmarkCircleOutline className="text-yellow-500" />
            <IoMdCheckmarkCircleOutline className="text-yellow-500" />

          </figure>
        ))}
      </section>
    </section>
  );
};

export default Pricing;

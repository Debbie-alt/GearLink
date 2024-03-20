import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PricingType } from "../../Objects";

const Pricing = () => {
  return (
    <section className=" bg  py-5 px-16 flex flex-col space-y-10  w-full">
      <div className="text-center text-white ">
        <h1 className=" font-bold text-lg ">Pricing</h1>
        <p className="font-semibold ">
          Flexible Pricing plans to suit your business needs. Choose the Plan
          that works best for you
        </p>
      </div>

      <section className="flex flex-col md:flex-row space-x-5 text-white border-2 border-slate-400  p-6 rounded-md">
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

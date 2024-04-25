import React from 'react'
import img1 from '../../public/img1.jfif'
import img2 from '../../public/img2.jfif'
import img3 from '../../public/img3.jfif'
import img4 from '../../public/img4.jfif'


const Hero = () => {
  return (
    <section className='h-screen w-full text-white  flex flex-col justify-evenly '>
         <p className='font-bold font-roboto'> Revolutionize your Auto Business </p>
         <h2 className='font-bold text-xl md:text-3xl heading text-left max-w-xl'>The Ultimate Saas Solution For  Independent Automobile Vendors and Buyers</h2>
         <figure className='flex space-x-4 md:space-x-14'>
         <button className='bg-yellow-400  rounded-lg  md:p-2 text-xs md:text-lg text-black w-1/2  xs:w-1/3 lg:w-1/6 shadow-lg  shadow-yellow-800 hover:bg-yellow-500 font-sora font-semibold'>Explore  now</button>
           <div className='flex  py-1'>
            <img src={img1} alt="" className='w-10 h-10 md:w-12 md:h-12 rounded-full' />
            <img src={img2} alt="" className='w-10 h-10 md:w-12 md:h-12   -mx-2 rounded-full' />
            <img src={img3} alt="" className='w-10 h-10 md:w-12 md:h-12   -mx-2  rounded-full' />
            <img src={img4} alt="" className='w-10 h-10 md:w-12 md:h-12  -mx-2 rounded-full' />

           </div>
           <p className='font-semibold font-sora self-center text-xs md:text-[15px] mx-5'>Over 10k reviews</p>

         </figure>
         
    </section>
  )
}

export default Hero
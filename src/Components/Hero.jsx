import React from 'react'

const Hero = () => {
  return (
    <section className='h-2/3 w-full text-white  flex flex-col justify-evenly '>
         <p className='font-bold font-roboto'> Revolutionize your Auto Business </p>
         <h2 className='font-bold text-3xl heading text-left max-w-xl'>The Ultimate Saas Solution For  Independent Automobile Vendors and Buyers</h2>
         <figure className='flex '>
         <button className='bg-yellow-400  rounded-lg  p-2 text-black w-1/2  xs:w-1/3 lg:w-1/6 shadow-lg  shadow-yellow-800 hover:bg-yellow-500 font-roboto font-semibold'>Explore  now</button>
         </figure>
         
    </section>
  )
}

export default Hero
import React from 'react'
import Header from './Components/LandingPage/Header'
import Features from './Components/LandingPage/Features'
import HowitWorks from './Components/LandingPage/HowitWorks'
import Pricing from './Components/LandingPage/Pricing'
import Footer from './Components/LandingPage/Footer'

const LandingPage = () => {
  return (
  
  <main className='flex flex-col'>
      <Header/>
      <Features/>
      <HowitWorks/>
      <Pricing/>
      <Footer/>
   </main>
  )
}

export default LandingPage
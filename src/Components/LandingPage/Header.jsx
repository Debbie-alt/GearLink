import Data from "./Data"
import Hero from "../Hero"
import Navbar from "./Navbar"

const Header = () => {
  return (
      <section className=" header h-screen pb-6 sm:pb-0  py-5 px-8  sm:px-10 md:px-16 flex flex-col space-y-10  w-full">
            <Navbar/>
            <Hero/>
            <Data/>
      </section>
  )
}

export default Header
import Data from "./Data"
import Hero from "../Hero"
import Navbar from "./Navbar"

const Header = () => {
  return (
      <section className=" header h-screen  py-5 px-16 flex flex-col space-y-10  w-full">
            <Navbar/>
            <Hero/>
            <Data/>
      </section>
  )
}

export default Header
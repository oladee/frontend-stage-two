import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function Layout() {

  return (
    <div className="font-roboto bg-[#EEE8E8]">
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
      <ScrollRestoration/>
    </div>
  )
}

export default Layout

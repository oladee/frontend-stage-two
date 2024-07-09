import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import x from "../assets/x.png"
import linkedin from "../assets/linkedin.png"
import ig from "../assets/ig.png"
import youtube from "../assets/youtube.png"

const Footer = () => {
  return (
    <div className="md:flex flex-wrap items-center md:gap-10 lg:gap-24 py-10 md:py-16 lg:py-28 px-5 md:px-14 lg:px-28 space-y-4">
        <section className="flex flex-col md:items-center gap-5 lg:w-[30%]">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex gap-4">
                <img src={x} alt="" />
                <img src={ig} alt="" />
                <img src={youtube} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </section>
        <section className="flex flex-row flex-wrap pt-6 md:pt-0 gap-14  md:justify-between md:w-[80%] lg:w-[60%]">
            <div className="space-y-4">
                <header className="text-lg font-bold">
                    Company
                </header>
                <div className="flex flex-col gap-1">
                    <Link to='/'>
                    Products
                    </Link>
                    <Link to='/carts'>
                        Carts
                    </Link>
                </div>
            </div>
            <div className="space-y-4">
                <header className="text-lg font-bold">
                    Connect 
                </header>
                <div className="flex flex-col gap-1">
                    <Link to='/'>
                    Twitter
                    </Link>
                    <Link to='/'>
                        Instagram
                    </Link>
                    <Link to='/'>
                        Linkedin
                    </Link>
                    <Link to='/'>
                        Youtube
                    </Link>
                </div>
            </div>
            <div className="space-y-4">
                <header className="text-lg font-bold">
                    Support
                </header>
                <div className="flex flex-col gap-1">
                    <Link to='/'>
                    FAQs
                    </Link>
                    <Link to='/'>
                        Support Us
                    </Link>
                    <Link to='/'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer

import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import close from "../assets/close.svg"
import ham from "../assets/hammenu.svg"
import logo from "../assets/logo.svg"
import { ProductContext } from "../context/ProductContext"
import { useContext } from "react"

const Navbar = () => {
  const {cart} = useContext(ProductContext)
  const [checkout, setCheckout] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    const checkPath = location.pathname.slice(1,9)
    if(checkPath == 'checkout'){
      setCheckout(true)
    }
    const mobMenu = document.querySelector('#mobby')
  const ham = document.querySelector('#ham')
  const mobUl = document.querySelector(".mobUl")
  const closeIcon = document.querySelector(".closeIcon")

  ham?.addEventListener('click',()=>{
    mobMenu.classList.add('open')
    mobMenu.style.animation = "mymove 1s 1"
	if(mobMenu.classList.contains('open')){
		document.body.classList.add('bodyStiff')
	}else{
		document.body.classList.remove('bodyStiff')
	}
  })

  mobMenu?.addEventListener('click', (e)=>{
    e.stopPropagation()
    mobMenu.classList.toggle('open')
    document.body.classList.remove('bodyStiff')
    
  })

  mobUl?.addEventListener('click', (e)=>{
    e.stopPropagation()
  })

  closeIcon?.addEventListener('click', ()=>{
    mobMenu.style.animation = "mymoveopposite 1s 1"
    setTimeout(()=>{
      mobMenu.classList.remove('open')
      document.body.classList.remove('bodyStiff')
    },1000)
  })
  },[location.pathname])
  return (
    <section className="flex justify-between items-center py-3 px-4 md:py-8 md:px-10 md:pt-8 lg:px-20 bg-[#EEE8E8] fixed z-40 w-full" id="nav">
        {checkout  ? (<div className="flex w-full justify-center">
          <img src={logo} alt="" />
        </div>) : (<>
          <nav className="lg:flex lg:justify-between lg:items-center font-roboto lg:w-full"  >
          <div className=" lg:flex items-center lg:w-full" >
              <Link to="/" className="w-[20%]"><img src={logo} alt="Logo svg"/></Link>
              <div id="mobby" className="hidden lg:flex w-[90%] justify-center">
                <ul className="hidden lg:flex list-none lg:gap-11 w-[80%] border text-base text-black-100 font-medium mobUl lg:items-center" >
                  <div className="flex justify-end">
                    <img src={close} alt="" className="closeIcon lg:hidden w-12"/>
                  </div>
                  <NavLink className={({isActive})=> [
                      isActive ? "p-2 rounded bg-[#F5F5F5]" : "",
                    ].join(" ")} 
                  to="/">
                    <li>Product</li>
                  </NavLink>
                  <NavLink className={({isActive})=> [
                      isActive ? "p-2 rounded bg-[#F5F5F5] relative" : "relative",
                    ].join(" ")} to="/cart" state={[...cart]}>
                    <li>Cart</li>
                    <li className="absolute text-xs md:text-sm top-[-5px] right-[-10px] text-red-400 ">
                      {cart.length || ''}
                    </li>
                  </NavLink>    
                </ul>
              </div>
          </div>
        </nav>
        <img src={ham} alt="" className="lg:hidden w-12" id="ham"/>
        </>)}
      </section>
  )
}

export default Navbar

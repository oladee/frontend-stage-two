import { useContext} from "react"
import Item from "../components/Cart/Item"
import { ProductContext } from "../context/ProductContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const {cart, tP} = useContext(ProductContext)
    const navigate = useNavigate()
  return (
    <div className="pt-28 md:pt-32 lg:pt-40 px-5 md:px-14 lg:px-14 grid lg:gap-44 lg:grid-cols-2">
      <section>
        {
            cart.length > 0 ? cart.map((item)=>(<Item key={item?.id} img={item?.img} name={item?.name} price={item?.price} id={item?.id}  quantity={item?.quantity} /> )) :  (<h1>Looks like you are yet to select a Product</h1>)
        }
      </section>
      <section>
        <h3 className="w-full text-xl lg:text-[28px] mt-7 lg:mt-0 mb-3 lg:mb-5 font-bold">
            Details
        </h3>
        <div className="flex items-center justify-between pb-4 font-medium text-sm">
            <h2>
                Temporary Amount
            </h2>
            <p>
                {(tP || 0).toLocaleString("en-US")}
            </p>
        </div>
        <div className=" border-b-2 border-black-100 flex items-center justify-between pb-3 font-medium text-sm">
            <h2>
                Charges
            </h2>
            <p>
                N{tP / 1000 || 0} 
            </p>
        </div>
        <div className="flex items-center justify-between pt-9 font-medium text-sm pb-16">
            <h2>
                Total <br />
                Including VAT
            </h2>
             <p>
                {
                    (tP + tP / 1000).toLocaleString("en-US") || 0
                }
             </p>
        </div>
        <div className="w-full">
        <button onClick={()=> {navigate('/checkout')}} className='text-xs md:text-sm text-white bg-[#65558F] py-2 px-3 md:py-3 md:px-6 rounded-full border border-[#65558F] hover:bg-[#EEE8E8] hover:text-[#65558F] transition-all duration-500 w-[100%] disabled:bg-[#a69ac5]' disabled={!cart.length > 0} >
            CHECKOUT
        </button >
        </div>
        
      </section>
    </div>
  )
}

export default Cart

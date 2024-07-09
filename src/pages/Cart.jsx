import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { products } from "../constants"
import Item from "../components/Cart/Item"

const Cart = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [details, setDetails] = useState([])
    const [disabled, setDisabled] = useState(true)
    useEffect(()=>{
        const productInfo = products.filter((product)=> product.name == id)
        if(productInfo.length > 0){
            setDisabled(false)
            setDetails(productInfo)
        }
    },[id])
  return (
    <div className="pt-28 md:pt-32 lg:pt-40 px-5 md:px-14 lg:px-14 grid lg:gap-44 lg:grid-cols-2">
      <section>
        {
            details.length > 0 ? <Item img={details[0].img} name={details[0].name} price={details[0].actualPrice} color={details[0].color} />  :  (<h1>Looks like you are yet to select a Product</h1>)
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
                {(details[0]?.actualPrice || 0).toLocaleString("en-US")}
            </p>
        </div>
        <div className=" border-b-2 border-black-100 flex items-center justify-between pb-3 font-medium text-sm">
            <h2>
                Charges
            </h2>
            <p>
                N{details[0]?.actualPrice / 1000 || 0} 
            </p>
        </div>
        <div className="flex items-center justify-between pt-9 font-medium text-sm pb-16">
            <h2>
                Total <br />
                Including VAT
            </h2>
             <p>
                {
                    (details[0]?.actualPrice + details[0]?.actualPrice / 1000).toLocaleString("en-US") || 0
                }
             </p>
        </div>
        <div className="w-full">
        <button onClick={()=>{navigate(`/checkout/${details[0]?.name}`)}} className='text-xs md:text-sm text-white bg-[#65558F] py-2 px-3 md:py-3 md:px-6 rounded-full border border-[#65558F] hover:bg-[#EEE8E8] hover:text-[#65558F] transition-all duration-500 w-[100%] disabled:bg-[#a69ac5]' disabled={disabled}>
            CHECKOUT
        </button >
        </div>
        
      </section>
    </div>
  )
}

export default Cart

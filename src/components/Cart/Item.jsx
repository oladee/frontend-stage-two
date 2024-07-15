import PropTypes from "prop-types"
import trash from "../../assets/trash.png"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
const Item = ({name, img, price, id, quantity}) => {
  const {removeItemFromCart, handleItemQuantityDecrease, handleItemQuantityIncrease} = useContext(ProductContext)
  return (
    <div className="flex items-start justify-between border-b-2 border-black-200 pb-4 mb-4 lg:pb-6">
      <section className="flex items-start gap-3">
        <div>
            <img src={'https://api.timbu.cloud/images/'+img} alt="" className="w-[80px] h-[80px] object-contain" />
        </div>
        <div>
            <h2 className="text-sm font-medium">
                {name}
            </h2>
            <h2 className="text-sm font-medium">
                Color : Black
            </h2>
            <img src={trash} alt="" className="cursor-pointer"  onClick={ ()=>{removeItemFromCart(id)}}/>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4">
        <div className="flex items-center gap-1">
            <button onClick={()=>{
              handleItemQuantityDecrease(id)
            }}>-</button>
            <p>{quantity}</p>
            <button onClick={()=>{handleItemQuantityIncrease(id)}} >+</button>
        </div>
        <p className="font-extrabold">
        ₦{price}
        </p>
      </section>
    </div>
  )
}

Item.propTypes = {
    name : PropTypes.string,
    id : PropTypes.string,
    img : PropTypes.string,
    price : PropTypes.number,
    quantity : PropTypes.number,
    color : PropTypes.string
}

export default Item

import { useState } from "react"
import PropTypes from "prop-types"
import trash from "../../assets/trash.png"
const Item = ({name, img, price, color}) => {
    const [quantity, setQuantity] = useState(1)
    const handleIncrease = ()=>{
        setQuantity(quantity + 1)
    }

    const handleDecrease = ()=>{
        setQuantity(quantity - 1)
    }
  return (
    <div className="flex items-start justify-between border-b-2 border-black-200 pb-4 lg:pb-6">
      <section className="flex items-start gap-3">
        <div>
            <img src={img} alt="" className="w-[80px] object-contain" />
        </div>
        <div>
            <h2 className="text-sm font-medium">
                {name}
            </h2>
            <h2 className="text-sm font-medium">
                Color : {color}
            </h2>
            <img src={trash} alt="" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4">
        <div className="flex items-center gap-1">
            <button onClick={handleDecrease}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrease}>+</button>
        </div>
        <p className="font-extrabold">
            {price}
        </p>
      </section>
    </div>
  )
}

Item.propTypes = {
    name : PropTypes.string,
    img : PropTypes.string,
    price : PropTypes.number,
    color : PropTypes.string
}

export default Item

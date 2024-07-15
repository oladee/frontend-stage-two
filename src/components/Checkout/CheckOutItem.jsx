import PropTypes from "prop-types"

const CheckOutItem = ({name, img, quantity, price}) => {
  return (
    <div className="pt-3 border-b-2 border-black-200 pb-2">
        <div className="flex gap-6 md:gap-20">
            <div >
                <img src={'https://api.timbu.cloud/images/' + img} alt="" className="w-[80px] h-[80px] object-contain rounded-md"/>
            </div>
            <div className="text-sm font-medium">
                <h2>
                    {name}
                </h2>
                <p>
                    color : Black
                </p>
            </div>
        </div>
        <div>
            <h2 className="text-center text-sm font-medium">
                Quantity : {quantity}
            </h2>
            <h1 className="text-center font-extrabold">
                N{price}
            </h1>
        </div>
      
    </div>
  )
}

CheckOutItem.propTypes = {
    name : PropTypes.string,
    color : PropTypes.string,
    img : PropTypes.string,
    quantity : PropTypes.string,
    price : PropTypes.string
}

export default CheckOutItem

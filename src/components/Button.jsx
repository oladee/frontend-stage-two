import PropTypes from 'prop-types'
import { useContext } from 'react'
import  { ProductContext } from '../context/ProductContext'


export const AddToCart = ({text, id, img, name, price})=>{
    const {handleAddToCart} = useContext(ProductContext)
    return(<button onClick={()=>{handleAddToCart(id,img,name, price)}} className='text-xs md:text-sm text-white bg-[#65558F] py-2 px-3 md:py-3 md:px-6 rounded-full border border-[#65558F] hover:bg-[#EEE8E8] hover:text-[#65558F] transition-all duration-500'>
    {text}
    </button>)
}

AddToCart.propTypes = {
    text : PropTypes.string,
    id : PropTypes.string,
    img : PropTypes.string,
    name : PropTypes.string,
    price : PropTypes.number
}


import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export const AddToCart = ({text, id})=>{
    return(<Link to={`cart/${id}`} className='text-xs md:text-sm text-white bg-[#65558F] py-2 px-3 md:py-3 md:px-6 rounded-full border border-[#65558F] hover:bg-[#EEE8E8] hover:text-[#65558F] transition-all duration-500'>
    {text}
    </Link>)
}

AddToCart.propTypes = {
    text : PropTypes.string,
    id : PropTypes.string,
}


import PropTypes from 'prop-types'
import { AddToCart } from '../Button'

const Card = ({img, name, price, minquantity}) => {
  return (
    <div className='font-roboto rounded-xl border border-[#CAC4D0] h-max hover:scale-90 transition-all duration-700 cursor-pointer'>
      <section>
        <img src={img} alt="" className='w-full lg:rounded-t-xl' />
      </section>
      <section className='p-2 md:p-5 bg-white rounded-b-xl'>
        <div>
            <h3 className='text-sm md:text-base font-normal text-black-100 text-wrap truncate line-clamp-1 md:line-clamp-2'>
                {name}
            </h3>
            <h2 className='text-black-200 font-extrabold text-sm md:text-base '>
                {price}
            </h2>
            <p className='text-xs pt-2 md:pt-4'>
                Min. Order {minquantity} piece(s)
            </p>
        </div>
        <div className='flex justify-end pt-4 md:pt-4'>
          <AddToCart text='Add to Cart' id={name} />
        </div>
      </section>
    </div>
  )
}

Card.propTypes = {
    img : PropTypes.string,
    name : PropTypes.string,
    price : PropTypes.string,
    minquantity : PropTypes.number
}

export default Card

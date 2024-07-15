import PropTypes from 'prop-types'
import { AddToCart } from '../Button'

const Card = ({img, name, price, id}) => {
  return (
   <div className=' w-[180px] h-[320px] md:w-[310px]  md:h-[360px] lg:h-[460px] lg:w-[360px]'>
     <div className='font-roboto rounded-xl border border-[#CAC4D0] hover:scale-90 transition-all duration-700 cursor-pointer'>
      <section>
        <img src={'https://api.timbu.cloud/images/'+img} alt="" className='lg:rounded-t-xl w-full h-[200px] lg:h-[320px] object-cover' />
      </section>
      <section className='p-2 md:p-5 bg-white rounded-b-xl'>
        <div>
            <h3 className='text-sm md:text-base font-normal text-black-100 text-wrap truncate line-clamp-1 md:line-clamp-2'>
                {name}
            </h3>
            <h2 className='text-black-200 font-extrabold text-sm md:text-base '>
            ₦{price}
            </h2>
            <p className='text-xs pt-2 md:pt-4'>
                Min. Order 1 piece(s)
            </p>
        </div>
        <div className='flex justify-end pt-4 md:pt-4'>
          <AddToCart text='Add to Cart' id={id} img={img} name={name} price={price} />
        </div>
      </section>
    </div>
   </div>
  )
}

Card.propTypes = {
    img : PropTypes.string,
    name : PropTypes.string,
    price : PropTypes.number,
    id : PropTypes.string
}

export default Card

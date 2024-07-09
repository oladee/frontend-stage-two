import { useEffect, useState } from "react"
import { Form, useParams } from "react-router-dom"
import { products } from "../constants"
import visa from "../assets/visa.svg"
import master from "../assets/master.svg"
import paypal from "../assets/paypal.svg"
import { ErrorMessage, Field, Formik } from "formik"
import * as Yup from "yup"
import CheckOutItem from "../components/Checkout/CheckOutItem"

const Checkout = () => {
  const {id} = useParams()
  const [details, setDetails] = useState([])
    useEffect(()=>{
        const productInfo = products.filter((product)=> product.name == id)
        if(productInfo.length > 0){
            setDetails(productInfo)
        }
    },[id])

  return (
    <div className="pt-28 pb-12 md:pt-32 lg:pb-20 lg:pt-40 px-5 md:px-14 lg:px-14 grid gap-7 lg:gap-44 lg:grid-cols-2">
      <section className="w-full">
        <header className="font-bold text-xl md:text-[28px] pb-3">
          Payment Method
        </header>
        <h4 className="text-sm font-medium pb-6 md:pb-[34px]">
        Please provide the payment method for your order
        </h4>
        <div className="flex items-center pb-8 md:pb-14 gap-5 md:gap-7">
          <img src={visa} alt="" />
          <img src={master} alt="" />
          <img src={paypal} alt="" />
        </div>
        <Formik
        initialValues={{cardNo : '', expDate : '', cvv : '', name : ''}}
        validationSchema={Yup.object({
          cardNo : Yup.number('Must strictly be a number').required('Field is required'),
          expDate : Yup.string().min(4, 'Not a valid exp Date').required('Field is required'),
          cvv : Yup.number('Must be a number').min(3, 'minimum of 3 characters').max(3, 'Maximum of 3 characters').required('Cvv is required'),
          name : Yup.string().required('Field is required')
        })}
        className="w-full"
        >
          <Form className="w-full">
            <label htmlFor="" className="flex flex-col">
              <h4 className="mb-3 text-sm font-medium text-black-100">Card Number</h4>
             <Field name='cardNo' type='number' placeholder="Enter your card Number" pattern="[0-9\s]{13,19}" className="w-full p-3 rounded-2xl text-sm font-medium text-black-100 border border-black-100"/>
             <ErrorMessage name="cardNo" >
              {msg => <div className="text-red-500 italic pt-2">{msg}</div>}
             </ErrorMessage>
            </label>
            <div className="flex flex-col md:flex-row mt-8 lg:mt-9 mb-8 md:mb-12 gap-7">
              <label htmlFor="" className="flex flex-col items-start">
                <h4>Expiration Date</h4>
              <Field name='expDate' type='text' maxLength='5' placeholder="MM/YY" className="p-3 rounded-2xl text-sm font-medium text-black-100 border border-black-100"/>
              <ErrorMessage name="expDate">
              {msg => <div className="text-red-500 italic pt-2">{msg}</div>}
              </ErrorMessage>
              </label>
              <label htmlFor="" className="flex flex-col justify-start items-start"> 
                <h4>
                CVV
                </h4>
              <Field name='cvv' type='number' placeholder="XXX" className="p-3 rounded-2xl text-sm font-medium text-black-100 border border-black-100"/>
              <ErrorMessage name="cvv">
              {msg => <div className="text-red-500 italic pt-2">{msg}</div>}
              </ErrorMessage>
              </label>
            </div>
            <label htmlFor="" className="flex flex-col">
               <h4> Name on Card</h4>
              <Field name='name' type='text' placeholder="Enter your name" className="p-3 rounded-2xl text-sm font-medium text-black-100 border border-black-100"/>
              <ErrorMessage name="name">
              {msg => <div className="text-red-500 italic pt-2">{msg}</div>}
              </ErrorMessage>
            </label>
           
           <div>
           <button className='mt-7 md:mt-10 text-xs md:text-sm text-white bg-[#65558F] py-2 px-3 md:py-3 md:px-6 rounded-full border border-[#65558F] hover:bg-[#EEE8E8] hover:text-[#65558F] transition-all duration-500 w-[100%] disabled:bg-[#a69ac5]'>
              CONTINUE
            </button>
           </div>
          </Form>
        </Formik>
      </section>
      <section className="">
         <header className="text-2xl font-medium ">
          Your Order
         </header>
         <section>
           <CheckOutItem color={details[0]?.color} img={details[0]?.img} name={details[0]?.name} price={details[0]?.actualPrice} quantity={details[0]?.minquantity}/>
         </section>
         <h1 className="font-semibold pt-4">
          Order Summary
         </h1>
         <div className="flex items-center font-medium justify-between py-3">
          <h2>
            Subtotal
          </h2>
          <p>
            N{details[0]?.actualPrice}
          </p>
         </div>
         <div className="flex items-center font-medium justify-between pb-4 border-b-2 border-black-200">
          <h2>
            Tax
          </h2>
          <p>
            N{details[0]?.actualPrice / 1000 || 0}
          </p>
         </div>
         <div className="flex items-center font-medium justify-between border-black-200 pt-3">
          <h2>
            Total
          </h2>
          <p>
            N{(details[0]?.actualPrice + details[0]?.actualPrice / 1000).toLocaleString("en-US") || 0}
          </p>
         </div>
      </section>
    </div>
  )
}

export default Checkout

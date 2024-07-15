import { useEffect, useState } from "react"
import Card from "../components/Product/Card"
import loadingIcon from "../assets/loading.svg"
import axios from "axios"

const Product = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const finalUrl = import.meta.env.VITE_FINAL_URL
  const [queryLink, setQueryLink] = useState(baseUrl+'page=1&size=10'+finalUrl)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  useEffect(()=>{
    setLoading(true)
    axios.get(queryLink)
    .then((res)=>{
      setData(res.data)
      setTimeout(()=>{
        setLoading(false)
      },1500)
    })

    .catch((err)=>{
      console.log(err)
    })
  }, [queryLink])


  const handleNextPage = ()=>{
    if(data.next_page){
      console.log(data.next_page.slice(10))
      const pagination = data.next_page.slice(10)
      setQueryLink(baseUrl+pagination+finalUrl)
    }
    return
    
  }

  const handlePrevPage = ()=>{
    if(data.previous_page){
      console.log(data.previous_page.slice(10))
      const pagination = data.previous_page.slice(10)
      setQueryLink(baseUrl+pagination+finalUrl)
    }
    return
  }
  

  return (
    <div className="pt-28 md:pt-32 px-5 md:px-8 flex flex-col items-center">
      <header className="text-3xl lg:text-4xl text-black-200 font-extrabold font-roboto">
        Product Page
      </header>
      <h4 className="text-center pt-4 font-medium text-black-200 text-sm md:text-base">
      Our Latest Products for Which Class and Durability <br /> Converge in Perfect Harmony
      </h4>
      {
        loading ? (<div className="py-20">
          <img src={loadingIcon} alt="" />
        </div>) : (<main className="md:px-10 lg:px-20 py-12 lg:py-14 gap-5 md:gap-10 lg:gap-y-14 lg:gap-x-10 grid grid-cols-2 lg:grid-cols-3 place-items-center">
        {
          data?.items.map(product => <Card key={product?.photos[0]?.url} price={product?.current_price[0].NGN[0]} img={product.photos[0]?.url} name={product?.name} id={product?.id} />)
        }
      </main>)
      }
      <div className="flex items-center gap-6 ">
          <button onClick={handlePrevPage} className="disabled:text-[#f5f5f5]" disabled={!data?.previous_page}>
            Prev Page
          </button>

          <button onClick={handleNextPage} className="disabled:text-[#f5f5f5]" disabled={!data?.next_page}>
            Next Page
          </button>
        </div>
    </div>
  )
}

export default Product

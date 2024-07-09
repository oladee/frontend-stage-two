import Card from "../components/Product/Card"
import {products} from "../constants"

const Product = () => {
  return (
    <div className="pt-28 md:pt-32 px-5 md:px-8 flex flex-col items-center">
      <header className="text-3xl lg:text-4xl text-black-200 font-extrabold font-roboto">
        Product Page
      </header>
      <h4 className="text-center pt-4 font-medium text-black-200 text-sm md:text-base">
      Our Latest Products for Which Class and Durability <br /> Converge in Perfect Harmony
      </h4>
      <main className="md:px-10 lg:px-20 py-12 lg:py-14 gap-5 md:gap-10 lg:gap-y-14 lg:gap-x-10 grid grid-cols-2 lg:grid-cols-3 place-items-center">
        {
          products.map(product => <Card key={product.img} minquantity={product.minquantity} price={product.price} img={product.img} name={product.name}/>)
        }
      </main>
    </div>
  )
}

export default Product

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const ProductContext = createContext('')

const ProductContextProvider = ({children})=>{
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    // localStorage.clear()
    const [tP, setTP] = useState(0)

    useEffect(()=>{
        
            localStorage.setItem('cart', JSON.stringify(cart))

        const totalPrice = cart.reduce((acc,currenty)=>{
            return acc + (currenty?.quantity * currenty?.price)
        }, 0)
        setTP(totalPrice)
    },[cart])

    const handleAddToCart = (itemid, img, name, price)=> {
        const duplicate = cart.filter((item)=> item.id == itemid)
        if(duplicate.length > 0){
            return alert('Item Already Exist in cart')
        }
        const newCart = [...cart]
        newCart.push({id : itemid, quantity : 1, price, name, img})
        setCart(newCart)
        
        
    }

    const removeItemFromCart = (itemId)=> {
        const newCart = cart.filter((product)=> product.id != itemId
        )
        setCart(newCart)
    }
    
    const handleItemQuantityIncrease = (id)=>{

        const newCart = [...cart]
        const item = newCart.map((product) => {
            if(product.id == id){
                return {
                    ...product,
                    quantity : product.quantity + 1
                }
                // product.quantity += 1
            }else{
                return product
            }
        } )
        
        setCart([...item])
        
    }

    const handleItemQuantityDecrease = (id)=>{
        if(cart.filter((product)=> product.id == id)[0].quantity == 1){
            return
        }
        
        const newCart = [...cart]
        const item = newCart.map((product) => {
            if(product.id == id){
                return {
                    ...product,
                    quantity : product.quantity - 1
                }
            }else{
                return product
            }
        } )
        
        setCart([...item])
    }

    return(
    <ProductContext.Provider value={{cart, handleAddToCart, removeItemFromCart, tP, handleItemQuantityIncrease, handleItemQuantityDecrease}}>
        {children}
    </ProductContext.Provider>
    )
}

ProductContextProvider.propTypes = {
    children : PropTypes.object
}

export default ProductContextProvider
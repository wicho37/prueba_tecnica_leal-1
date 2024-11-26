import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
  
    const agregarAlCarrrito = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id )
    }

    const totalCompra = () => {
      return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrrito,
            isInCart,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}
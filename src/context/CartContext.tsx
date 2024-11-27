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

    const vaciarCarrito = () => {
      setCart([])
    }

    const eliminarDelCarrito = (id) =>{
      setCart(cart.filter((item) => item.id !== id))
    }

    const  totalCantidad = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            eliminarDelCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
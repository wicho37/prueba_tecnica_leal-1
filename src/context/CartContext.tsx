import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hook/useFetch";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { data } = useFetch('https://fakestoreapi.com/products')
  //const [filter, setFilter] = useState([])

  const [cart, setCart] = useState([])
  const [dataProducts, setDataProducts] = useState() as any
  
 
  // *ATENTION 1*   crear otro estado que almacene lo filtado, y con esto, se le pasa por el provider hasta el map
  // que pinta los productos del home
  
  const agregarAlCarrrito = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const totalCompra = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const eliminarDelCarrito = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const productosFiltrados = (item: string) => {
    const filter = dataProducts && dataProducts.filter((producto: any) =>
      producto.title.toLowerCase().includes(item.toLowerCase())
    );

    console.log(filter)
  }

  useEffect(() => {
    setDataProducts(data)
  }, [data]) 
 
  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrrito,
      isInCart,
      totalCompra,
      vaciarCarrito,
      totalCantidad,
      eliminarDelCarrito,
      dataProducts,
      productosFiltrados
      //resultFilter

    }}>
      {children}
    </CartContext.Provider>
  )
}
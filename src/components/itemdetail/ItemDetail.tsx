import style from "./ItemDetail.module.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"




const ItemDetail = ({item}:any) => {
    const {cart, setCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    /* const [color, setColor] = ("negro") */

    const handleAgregar = () => {
          const newItem = {
            ...item,
            cantidad
           /*  color */
        }
          setCart( [...cart, newItem] )
         
  }

    return(
        <div className={style.cart}>
            <h2>{item.name}</h2>
            <img src={item.image} className={style.imgIdetail} alt="" />
            <p>precio: $ {item.price}</p>
            <p>{item.description}</p>
                <ItemCounter 
                   max={item.stock}
                   counter={cantidad}
                   setCounter={setCantidad}
                   agregar={handleAgregar}
                />
            
        </div>
    )
}

export default ItemDetail
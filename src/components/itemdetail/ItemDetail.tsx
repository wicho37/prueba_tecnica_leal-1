import style from "./ItemDetail.module.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"




const ItemDetail = ({item}:any) => {
    const {agregarAlCarrrito, isInCart} = useContext(CartContext)

    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(0)
    /* const [color, setColor] = ("negro") */

    const handleAgregar = () => {
          const newItem = {
            ...item,
            cantidad
           /*  color */
        }
          agregarAlCarrrito(newItem)
  }

    return(
        <div className={style.cart}>
            <h2>{item.name}</h2>
            <img src={item.image} className={style.imgIdetail} alt="" />
            <p>precio: $ {item.price}</p>
            <p>{item.description}</p>

            {
              isInCart(item.id)
                ? <Link to="/cart">terminar mi compra</Link>
                :<ItemCounter 
                   max={item.stock}
                   counter={cantidad}
                   setCounter={setCantidad}
                   agregar={handleAgregar}
                />
            }
                
        </div>
    )
}

export default ItemDetail
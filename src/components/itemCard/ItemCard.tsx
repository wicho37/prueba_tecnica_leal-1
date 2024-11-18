import style from "./ItemCard.module.css"
import { Link } from "react-router-dom"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"



const ItemCard = ({item}:any) => {
    const {cart, setCart}= useContext(CartContext)
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
            <Link to={`/detail/${item.id}`}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>precio: $ {item.price}</p>
            </Link>
            <ItemCounter 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                agregar={handleAgregar}
            />
            {/* <Link to={`/detail/${item.id}`}>ver más</Link> */}
        </div>
    )
}

export default ItemCard
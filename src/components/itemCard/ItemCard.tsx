
import { Link } from "react-router-dom"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"



const ItemCard = ({item}:any) => {
    const {agregarAlCarrrito, isInCart}= useContext(CartContext)
    

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
        <div>
            <Link to={`/detail/${item.id}`}>
        
            <h2>{item.tittle}</h2>
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
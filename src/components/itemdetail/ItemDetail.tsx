import style from "./ItemDetail.module.css"
import { Link } from "react-router-dom"



const ItemDetail = ({item}) => {
    return(
        <div className={style.cart}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <Link>agregar al carrito</Link>
        </div>
    )
}

export default ItemDetail
import style from "./ItemCard.module.css"
import { Link } from "react-router-dom"



const ItemCard = ({item}:any) => {

    return(
        <div className={style.cart}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <Link to={`/detail/${item.id}`}>ver más</Link>
        </div>
    )
}

export default ItemCard
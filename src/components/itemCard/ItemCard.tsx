import style from "./ItemCard.module.css"



const ItemCard = ({item}) => {
    return(
        <div className={style.cart}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button>agregar al carrito</button>
        </div>
    )
}

export default ItemCard
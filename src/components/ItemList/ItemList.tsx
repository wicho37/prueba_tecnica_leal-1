 import style from "./ItemList.module.css"
 import ItemCard from "../itemCard/ItemCard"
 import { useContext } from "react"
 import { CartContext } from "../../context/CartContext"
 // *ATENTION 2* Llamar al contexto y traes el resultado de los productos filtrados
 
 
 
const ItemList = ({productos}:any) => {
    const {dataProducts} = useContext(CartContext)
    console.log(dataProducts)
    console.log(productos)
    return(
        <div className={style.lista} >
            {
                productos.map((dataProducts) => <ItemCard key={productos.id}  item={productos} />)
            }
        </div>
    )
 }

 export default ItemList
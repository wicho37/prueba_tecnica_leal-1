 import style from "./ItemList.module.css"
 import ItemCard from "../itemCard/ItemCard"
 
 
 
const ItemList = ({productos}:any) => {
    
    return(
        <div className={style.lista}>
            {
                productos.map((productos) => <ItemCard key={productos.id}  item={productos} />)
            }
        </div>
    )
 }

 export default ItemList
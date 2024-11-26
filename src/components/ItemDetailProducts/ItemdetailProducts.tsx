import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../itemdetail/ItemDetail"




const ItemDetailProducts = () => {
    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

   /*  console.log(item)
    console.log(itemId) */

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then(r => {
            setItem( r.find(prod => prod.id === Number(itemId)) )
        })
        .finally(() => setLoading(false))
    },[])

    return(
        <div>
            {
                loading
                ? <h2>cargando....</h2>
                : <ItemDetail item={item} />
            }
        </div>
    )
}


export default ItemDetailProducts
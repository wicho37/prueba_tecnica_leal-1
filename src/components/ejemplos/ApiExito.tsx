/* import { useEffect, useState } from "react"; */
import ItemList from "../../components/ItemList/ItemList";
import { useFetch } from "../../hook/useFetch";
import { useParams } from "react-router-dom";
import { useProductos } from "../../hook/useProductos";
import styles from "./Apiexito.module.css"

const ApiExito = () => {
    const {productos, loading } = useProductos()
    console.log(productos, loading)

    const {categoryId} = useParams()
    console.log(categoryId)

    const {data} = useFetch('https://fakestoreapi.com/products')
    console.log(data)
    
    return(
       <div className={styles.containerApi}>
        <h2>Productos exito</h2>
        <br />
        {
            data &&
            <div>
                <ItemList productos={data}/>
            </div>
            /* loading
            ? <h2>cargando....</h2>
            : <ItemList productos={data}/> */
        }
       </div>
    )
}


export default ApiExito
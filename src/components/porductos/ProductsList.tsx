import style from "./ProductLIst.module.css"
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
/* import { useProductos } from "../../hook/useProductos"; */




const ProductList = () => {
  /* const {productos} = useProductos()
  console.log(productos) */
const [productos, setProductos] = useState ([])

useEffect(() => {
    pedirDatos()
           .then((res) => {
             setProductos(res)
           })
           .catch((error) => {
             console.log(error)
           })
        }, [])
        
        /*  useEffect (() => {
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(productos => setProductos(productos));
        },[])
        console.log(productos) */

    return (
        <div>
           <ItemList productos={productos}/>
        </div>
    )
}


export default ProductList
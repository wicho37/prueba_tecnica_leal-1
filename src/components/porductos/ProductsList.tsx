import style from "./ProductLIst.module.css"
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
/* import { useProductos } from "../../hook/useProductos"; */
import imagePpal from "../../assets/bg-quotes.png"
import { useParams } from "react-router-dom";





const ProductList = () => {
/*   const {productos, loading } = useProductos()
  console.log(productos, loading) */

 
 const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)

  const {categoryId} = useParams ()
  
 
  
  useEffect (() => {
    setLoading(true)
    
    pedirDatos()
    .then(r => {
      if (categoryId) {
            setProductos(r.filter(prod => prod.category === categoryId))
        } else{
            setProductos(r)
        }
    })
    .catch(e => console.log(e))
    .finally(() => {
        setLoading(false)
    })
}, [categoryId])

    return (
        <div className={style.container}>
            {
              loading
                  ? <img src={imagePpal} alt="" />
                  : <ItemList productos={productos}/>
            }
        </div>
    )
}


export default ProductList
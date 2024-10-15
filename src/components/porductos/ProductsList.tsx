import style from "./ProductLIst.module.css"
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useProductos } from "../../hook/useProductos";
import imagePpal from "../../assets/bg-quotes.png"




const ProductList = () => {
  const {productos, loading } = useProductos()
  console.log(productos, loading)

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
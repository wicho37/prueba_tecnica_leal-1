import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useFetch } from "../../hook/useFetch";


const ApiExito = () => {

    const {data} = useFetch('https://fakestoreapi.com/products')
    console.log(data)
    return(
       <div>
        <h2>Productos exito</h2>
        <br />

        {
            data &&
            <div>
                <ItemList productos={data}/>
            </div>
        }
       </div>
    )
}


export default ApiExito
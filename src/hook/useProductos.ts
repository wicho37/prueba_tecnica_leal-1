import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"




const useProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect (() => {
        pedirDatos()
        .then(r => setProductos(r))
        .catch(e => console.log(e))
    },[])

    return {productos}
        
}


export default useProductos
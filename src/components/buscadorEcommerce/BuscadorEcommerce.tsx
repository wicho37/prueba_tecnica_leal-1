import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";



const BuscadorEcommerce = () => {
     const {productosFiltrados} = useContext(CartContext)
    const [busqueda, setBusqueda] = useState()
   
  
       
   useEffect(()=>{
    if(!busqueda){
        productosFiltrados(busqueda)
    }
   }, [busqueda])
    
    return (
        <ul>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
         
             
        </ul>
    );
    
};

export default BuscadorEcommerce;












{/*  {
                productosFiltrados.leng> 0
                ? (productosFiltrados.map((item) => (
                    <li key={item.name}>
                       {Item.name} ${Item.category}
                    </li>
                  ))
                )
                : <p>no se enciontraron productos relacionados con {busqueda}</p>
            } */}
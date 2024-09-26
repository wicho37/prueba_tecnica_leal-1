import style from "./ProductLIst.module.css"
import img1 from "../../assets/bg-quotes.png"
import { useEffect, useState } from "react";



const Products = [
    { id: 1, name: "Laptop", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 2, name: "Phone", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 3, name: "Headphones", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 4, name: "Laptop", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 5, name: "Phone", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 6, name: "Headphones", price: 150, description: "Wireless headphones", image: {img1} },
  ];

const pedirDatos = () => {
    return new Promise((resolve) => {
        resolve(Products)
    })
}



const ProductList = () => {
const [productos, setProductos] = useState ([])
console.log(productos)

useEffect(() => {
    pedirDatos()
           .then((res) => {
             setProductos(res)
           })
           .catch((error) => {
             console.log(error)
           })
        }, [])
    

    return (
        <div className={style.lista}>
            {
                productos.map((prod) => (
                    <div className={style.cart}>
                       <h2>{prod.name}</h2>
                       <img src={img1} alt="" />
                       <p>{prod.price}</p>
                       <p>{prod.description}</p>
                       <button>agregar</button>
                    </div>
                ))
            }
        </div>
    )
}


export default ProductList
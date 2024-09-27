import style from "./ProductLIst.module.css"
import img1 from "../../assets/bg-quotes.png"
import { useEffect, useState } from "react";



const Products = [
    { id: 1, name: "Laptop1", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 2, name: "Phone1", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 3, name: "Headphones1", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 4, name: "laptop2", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 5, name: "Phone2", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 6, name: "Headphones2", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 7, name: "laptop3", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 8, name: "Phone3", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 9, name: "Headphones3", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 10, name: "laptop4", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 11, name: "Headphones4", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 12, name: "phone4", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 13, name: "Laptop5", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 14, name: "Phone5", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 15, name: "Headphones5", price: 150, description: "Wireless headphones", image: {img1} },
    { id: 16, name: "laptop6", price: 1200, description: "High-performance laptop", image: {img1}},
    { id: 17, name: "Headphones6", price: 800, description: "Smartphone with great features", image: {img1} },
    { id: 18, name: "phone6", price: 150, description: "Wireless headphones", image: {img1} },
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
                       <button>agregar al carrito</button>
                    </div>
                ))
            }
        </div>
    )
}


export default ProductList
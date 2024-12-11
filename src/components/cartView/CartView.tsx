import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import style from "./CartView.module.css"




const CartView = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    return (
        <div  className={style.contentCart}>
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) =>(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title}/>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => eliminarDelCarrito(item.id)}>eliminar producto</button>
                        <hr />
                    </div>
                ))
            }
             <div>
                <h4 className={style.compra}>Total Compra: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView
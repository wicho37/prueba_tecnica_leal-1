import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import style from "./CartView.module.css"




const CartView = () => {
    const {cart, totalCompra} = useContext(CartContext)

    return (
        <div  className={style.contentCart}>
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) =>(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.nombre}/>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <hr />
                    </div>
                   
                ))
            }
             <div>
                <h4 className={style.compra}>Total Compra: ${totalCompra()}</h4>
            </div>
        </div>
    )
}

export default CartView
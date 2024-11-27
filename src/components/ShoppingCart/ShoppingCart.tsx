import { Link } from "react-router-dom"
import shoppingCart from "../../assets/cart-shopping-solid (1).svg"
import style from "./ShoppingCart.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const ShoppingCart = () => {
    const {totalCantidad} = useContext(CartContext)

    return(
        <Link to="/cart" className={style.contentShopping}>
            <img src={shoppingCart} alt="" />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default ShoppingCart
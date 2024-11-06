import cart from "../../assets/cart-shopping-solid.svg"
import styles from "./MenuList.module.css"
import { Link } from "react-router-dom"
import botonClose from "../../assets/close.svg"



const MenuList = ( {close} ) => {

    return (
        <div className={styles.ul_li}>
                <img src={cart} className={styles.shopping_cart} alt="" />
                <nav className={styles.list} onClick={(e) => e.stopPropagation()}>
                   <img src={botonClose} onClick={close} className={styles.botonClose} alt="" />
                    <Link onClick={close}  className={styles.navbar} to="/productos/tablets"> tablets </Link>
                    <Link onClick={close}  className={styles.navbar} to="/productos/mac"> mac </Link>
                    <Link onClick={close}  className={styles.navbar} to="/productos/celulares"> celulares </Link>
                    <Link onClick={close}  className={styles.navbar} to="/"> inicio </Link>
                    <Link onClick={close}  className={styles.navbar} to="/ApiExito"> ApiExito </Link>
                    <Link onClick={close}  className={styles.navbar} to="/Post"> Post </Link>
                  </nav>
        </div>
        
    )
}


export default MenuList
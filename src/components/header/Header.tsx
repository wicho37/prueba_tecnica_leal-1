import styles from "./Header.module.css"
import logo from "../../assets/iconExito.svg"
import cart from "../../assets/cart-shopping-solid.svg"
import lupa from "../../assets/magnifying-glass-solid.svg"
import { Link } from "react-router-dom"



const Navbar = () => {

  return (
    <div className={styles.content_nav}>
        <div className={styles.input}>
            <img src={logo} className={styles.logo} alt="" />
            <div >
              <input 
                type="text"
                placeholder="busca tu producto...."
              />
              <img src={lupa} className={styles.lupa}alt="" />
            </div>
        </div>
        <div className={styles.ul_li}>
                <img src={cart} className={styles.shopping_cart} alt="" />
                <ul >
                  <li className={styles.list}>
                    <Link className={styles.navbar} to="/"> inicio </Link>
                    <Link className={styles.navbar} to="/ApiExito"> ApiExito </Link>
                    <Link className={styles.navbar} to="/Post"> Post </Link>
                  </li>
                </ul>
        </div>
    </div>
  )
};

export default Navbar

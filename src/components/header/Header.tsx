

import styles from "./Header.module.css"
import logo from "../../assets/iconExito.svg"
import cart from "../../assets/cart-shopping-solid.svg"
import lupa from "../../assets/magnifying-glass-solid.svg"



const Navbar = () => {

  return (
    <div className={styles.content_nav}>
        <div>
            <img src={logo} className={styles.logo} alt="" />
            <div className={styles.input}>
              <input 
                type="text"
                placeholder="busca tu producto...."
              />
              <img src={lupa} className={styles.lupa}alt="" />
            </div>
        </div>
        <div className={styles.ul_li}>
                <img src={cart} className={styles.shopping_cart} alt="" />
                <ul className={styles.list}>
                    <li>Feature</li>
                    <li>Team</li>
                    <li>Sing In</li>
                </ul>
        </div>
    </div>
  )
};

export default Navbar

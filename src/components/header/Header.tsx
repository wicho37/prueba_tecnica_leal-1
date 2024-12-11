import styles from "./Header.module.css"
import logo from "../../assets/iconExito.svg"

import Menu from "../menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import BuscadorEcommerce from "../buscadorEcommerce/BuscadorEcommerce";



const Navbar = () => {

  return (
    <div className={styles.content_nav}>
        <div className={styles.input}>
            <img src={logo} className={styles.logo} alt="" />
            <div >
              <BuscadorEcommerce />
            </div>
              <Menu />
              <ShoppingCart />
    </div>
        </div>
        
  )
};

export default Navbar

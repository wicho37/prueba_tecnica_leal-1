import styles from "./Header.module.css"
import logo from "../../assets/iconExito.svg"
import lupa from "../../assets/magnifying-glass-solid.svg"
import Menu from "../menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";



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
            
              <Menu />
              <ShoppingCart />
            
    </div>
        </div>
        
  )
};

export default Navbar

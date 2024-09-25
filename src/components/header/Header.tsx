

import styles from "./Header.module.css"
import logo from "../../assets/bg-quotes.png"



const Navbar = () => {

  return (
    <div className={styles.content_nav}>
        <div>
            <img src={logo} className={styles.logo} alt="" />
        </div>
        <div className={styles.ul_li}>
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

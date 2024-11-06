import { useState } from "react"
import burger from "../../assets/bars_solid.svg"
import MenuList from "./MenuLIst"
import style from './MenuList.module.css'



const Menu = () => {
    const [showMenu, setShowMenu] = useState (false)

    const handleOpen = () => {
        setShowMenu(true)
    }

    const handleClose = () => {
        setShowMenu(false)
    }
    return (
        <div className={`${showMenu ? style.menu_active: ""}`}>

            <div onClick={handleOpen} className={style.burger}>
               <img src={burger}  alt="img-burger" />
            </div>
            
            <div className={style.menu_backdrop} onClick={handleClose}> 
                <MenuList close={handleClose}/>
            </div>

        </div>
    )
}


export default Menu
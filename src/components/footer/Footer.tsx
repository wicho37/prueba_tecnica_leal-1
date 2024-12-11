import CardFooter from "../cardFooter/CardFooter"
import style from "./Footer.module.css"
import { Link } from "react-router-dom"



const Footer = () => {

    return(
        <div className={style.footer}>
            <CardFooter 
            tittle="our company"
            text1="ho we work"
            text2="why insure?"
            text3="check price"
            text4="reviews"
            />
            <CardFooter 
            tittle="help me"
            text1="faq"
            text2="terms of use"
            text3="privacy policy"
            text4="cookies"
            />
            <CardFooter 
            tittle="contact"
            text1="sales"
            text2="support"
            text3="live chat"
            text4=""
            />
            <CardFooter 
            tittle="others"
            text1="carrers"
            text2="press"
            text3="licenses"
            text4=""
            />
        </div>
    )
}


export default Footer
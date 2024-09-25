import style from "./CardFooter.module.css"



const CardFooter = ({tittle, text1, text2, text3, text4}) => {
    

    return(
        <div  className={style.contentCardFooter}>
            <h4>{tittle}</h4> 
            <div className={style.contentText}>
               <a>{text1}</a>
               <a>{text2}</a>
               <a>{text3}</a>
               <a>{text4}</a>
            </div>
                
        </div>
    )
}


export default CardFooter
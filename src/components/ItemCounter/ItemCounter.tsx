import style from "./Itemcounter.module.css"




const ItemCounter = ({max, counter, setCounter, agregar }) => {
   
    
    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    return (
        <div className={style.contentCount}>
           <button onClick={handleRestar}>-</button>
           <span>{counter}</span>
           <button onClick={handleSumar}>+</button>
           <button onClick={agregar}>agregar al carrito</button>
        </div>
    )
}


export default ItemCounter
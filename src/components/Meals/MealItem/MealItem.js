import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/cart-context"
import { useContext } from 'react'

function MealItem(props){
  const cartContext = useContext(CartContext)

  function addToCartHandler(amount){
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,

    })

  }
  
  
  return( 
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
    
  )
}

export default MealItem
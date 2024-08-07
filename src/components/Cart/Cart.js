import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../store/cart-context"
import { useContext, useState } from 'react'
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import submitContext from "./submit-context"
import { Fragment } from 'react'


/*const cartItems = 
<ul className={classes['cart-items']}>
  {[{id: "c1", name: "sushi", amount: 2, price: 45.27}].map((item) => (<ul>{item.name}</ul>))}
</ul>;*/

function Cart(props){

  const cartContext = useContext(CartContext)

  const [isCheckout, setIsCheckout] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  

  const totalPrice = `$${cartContext.totalAmount.toFixed(2)}` //total amount
  const hasItems = cartContext.items.length > 0

  function removeItemFromCartHandler(id){
    cartContext.removeItem(id)

  }
  
  function addItemToCartHandler(item){
    cartContext.addItem({...item, amount: 1})

  }

  function orderHandler(){
    //alert("Successfully Ordered! Your Bill: " + totalPrice + ". You can pay by cash or credit. Thank you for choosing ReactMeals!")
    setIsCheckout(true)
    
  }

 
  const cartItems = 
  <ul className={classes['cart-items']}>
  {cartContext.items.map((item) => (<ul><CartItem 
  key={item.id} 
  name={item.name} 
  price={item.price} 
  amount={item.amount}
  onRemove={removeItemFromCartHandler.bind(null, item.id)}
  onAdd={addItemToCartHandler.bind(null, item)} /></ul>))}
  </ul>;

  const modalContent = <Modal>
  {cartItems}
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalPrice}</span>
  </div>
  <div className={classes.actions}>
    <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>
  <div>
    {isCheckout && <CheckoutForm onClose={props.onHideCart} />}
  </div>
</Modal> 
 
  return(
  <Fragment>
    {!submitting && !submitted && modalContent} 
    {submitting && !submitted && <p>Sending your order...</p>}
    {!submitting && !submitted && <p>Orders sent successfully! Thank you for choosing ReactMeals!</p>}
  </Fragment>
  )
}

export default Cart

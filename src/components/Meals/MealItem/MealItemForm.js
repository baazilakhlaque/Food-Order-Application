import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef } from 'react'


function MealItemForm(props){
  const enteredAmountRef = useRef()
  
  function submitHandler(event){
    event.preventDefault()
    const enteredAmountStr = enteredAmountRef.current.value;
    const enteredAmount = +enteredAmountStr;
    props.onAddToCart(enteredAmount)

  }
 
  return(
  <form className={classes.form} onSubmit={submitHandler}>
    <Input label="Amount" ref={enteredAmountRef} input={{
      
      id: 'amount_' + props.id,
      type: 'number',
      defaultValue: '1'
    }}></Input>
    <button type='submit'>+Add</button>
    
  </form>
  )
}

export default MealItemForm
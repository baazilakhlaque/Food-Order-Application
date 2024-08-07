import classes from "./CheckoutForm.module.css"
import { useState, useContext } from 'react'
import CartContext from "../../store/cart-context"
import SubmitContext from "./submit-context"

function CheckoutForm(props){
  const [enteredName, setEnteredName] = useState('')
  const [enteredStreet, setEnteredStreet] = useState('')
  const [enteredPostal, setEnteredPostal] = useState('')
  const [enteredCity, setEnteredCity] = useState('')

  const [formIsValid, setFormIsValid] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

 

  const cartContext = useContext(CartContext)
  const submitContext = useContext(SubmitContext)

  function nameInputHandler(event){
    setEnteredName(event.target.value)
  }

  function streetInputHandler(event){
    setEnteredStreet(event.target.value)
  }

  function postalInputHandler(event){
    setEnteredPostal(event.target.value)
  }

  function cityInputHandler(event){
    setEnteredCity(event.target.value)
  }

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredStreetIsValid = enteredStreet.trim() !== ''
  const enteredCityIsValid = enteredCity.trim() !== ''
  const enteredPostalIsValid = enteredPostal.length > 5


  function confirmCheckoutHandler(event){
    event.preventDefault()
    
    if (enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid){
      setFormIsValid(true)
    }

   const userInfoData = {
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    }


    fetch('https://react-foodorderapp-60109-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userInfoData,
        orderedItems: cartContext.items
      }),
    })

  
    //setIsSubmitting(false)

    

  }


  const nameControlClasses = `${classes.control} ${
    enteredNameIsValid ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    enteredStreetIsValid ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    enteredPostalIsValid ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    enteredCityIsValid ? '' : classes.invalid
  }`;



  return(
    <form className={classes.form} onSubmit={confirmCheckoutHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputHandler}></input>
        {!enteredNameIsValid && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetInputHandler}></input>
        {!enteredStreetIsValid && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal-code'>Postal Code</label>
        <input type='text' id='postal-code' onChange={postalInputHandler}></input>
        {!enteredPostalIsValid && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityInputHandler}></input>
        {!enteredCityIsValid && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button type='submit' className={classes.submit}>Confirm</button>
      </div>

    </form>
  )

}

export default CheckoutForm

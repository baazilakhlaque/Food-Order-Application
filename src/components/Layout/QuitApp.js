import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import { Fragment, useState } from 'react'
import Modal from "../UI/Modal"
import PromptQuit from "./PromptQuit"

function QuitApp(){

  function leaveAppHandler(){
    setIsQuit(true)

  }

  const [isQuit, setIsQuit] = useState(false)
  
  return(
  <Fragment>  
  <button className={classes.button} onClick={leaveAppHandler}>
    <span className={classes.icon}><CartIcon /></span>
    <span>Quit Application</span>
  </button>
  {isQuit && <PromptQuit />}
  </Fragment>
  )
    

}

export default QuitApp
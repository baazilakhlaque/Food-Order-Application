import classes from "./HeaderCartButton.module.css"
import Modal from "../UI/Modal"
import { useState } from 'react'


function PromptQuit(){

  const [finalQuit, setFinalQuit] = useState(false)

  function finalQuitHandler(){
    setFinalQuit(true)
  }
  return(
    !finalQuit && <Modal>
      <div>
        <span>Are you sure you want to leave?</span>
      </div>
      <button className={classes.button} onClick={finalQuitHandler}>Yes</button>
      <button className={classes.button}>No</button>

    </Modal>
  )
}

export default PromptQuit
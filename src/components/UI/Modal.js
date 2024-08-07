import classes from "./Modal.module.css"
import { Fragment } from 'react'


function Backdrop(){
  return(
  <div className={classes.backdrop}></div>
  )
}

function ModalOverlay(props){
  return(
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
  )
}


function Modal(props){
  return(
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>

    </Fragment>
  )
}

export default Modal
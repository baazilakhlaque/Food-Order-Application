
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { Fragment, useContext } from 'react'
import CartContext from "../../store/cart-context"
import Modal from "../UI/Modal"
import QuitApp from "./QuitApp";

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext)
  const numOfCartItems = cartContext.items.reduce((acc, currentItem) => {
    return acc + currentItem.amount
  }, 0)

  return(
    <Fragment>
    <button onClick={props.onShowCartII} className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
    <QuitApp />
    </Fragment>
    
    );
};

export default HeaderCartButton;
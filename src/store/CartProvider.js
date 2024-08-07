import CartContext from "./cart-context"
import { useReducer } from 'react'

function cartReduce(state, action){
  if (action.type === "ADD"){
    /*const updatedItems = state.items.concat(action.itemToAdd)
    const totalUpdatedAmount = state.totalAmount + (action.itemToAdd.amount * action.itemToAdd.price)
    return{
      items: updatedItems,
      totalAmount: totalUpdatedAmount
    }*/
    const prevStateItems = [...state.items];
    for (const item of prevStateItems) {
      if (item.id === action.itemToAdd.id) {
        item.amount += action.itemToAdd.amount;
        const updatedTotalAmount = state.totalAmount + action.itemToAdd.price * action.itemToAdd.amount;
        const updatedItems = prevStateItems;
        return { 
          items: updatedItems, 
          totalAmount: updatedTotalAmount 
        };
      }
    }
    
    const updatedItems = state.items.concat(action.itemToAdd);
    const updatedTotalAmount = state.totalAmount + action.itemToAdd.price * action.itemToAdd.amount;

    return { 
      items: updatedItems, 
      totalAmount: updatedTotalAmount 
    };
  }
  
  if (action.type === "REMOVE"){
    const existingCartItemIndex = state.items.findIndex(item => {
      return item.id === action.itemToRemove
    })
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingCartItem.price
    let updatedItemsList

    if (existingCartItem.amount === 1){
      updatedItemsList = state.items.filter(item => item.id !== action.itemToRemove)
    }
    else{
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItemsList = [...state.items]
      updatedItemsList[existingCartItemIndex] = updatedItem
    }

    return{
      items: updatedItemsList,
      totalAmount: updatedTotalAmount
    }
    
    
  }
  return {defaultState}

}

const defaultState = {
  items: [],
  totalAmount: 0
}


function CartProvider(props){
  function addCartItem(item){
    dispatch({type: "ADD", itemToAdd: item})
  }
  
  function removeCartItem(id){
    dispatch({type:"REMOVE", itemToRemove: id})
  }


  const [state, dispatch] = useReducer(cartReduce, defaultState)

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem
  }


  return (
  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )

}

export default CartProvider
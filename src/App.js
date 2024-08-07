import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart"
import Meals from "./components/Meals/Meals"
import CartProvider from "./store/CartProvider";
import SubmitProvider from "./components/Cart/SubmitProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  function showCartHandler(){
    setIsShowCart(true)
  }

  function hideCartHandler(){
    setIsShowCart(false)
  }

  return (
    <CartProvider>
      <SubmitProvider>
      {isShowCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      </SubmitProvider>
    </CartProvider>
    
  );
}

export default App;

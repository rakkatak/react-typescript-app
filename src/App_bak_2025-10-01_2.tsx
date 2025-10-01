import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["item1", "item2"]);
  const clearItems = () => {
    setCartItems([]);
  };
  return (
    <>
      <NavBar cartItemCount={cartItems.length}></NavBar>
      <div>Cart Items:</div>
      <Cart cartItems={cartItems} clearItems={clearItems}></Cart>
    </>
  );
}

export default App;

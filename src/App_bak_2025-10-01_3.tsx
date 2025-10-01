import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    dicount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    const newGame = { ...game, player: { ...game.player, name: "Anita" } };
    setGame(newGame);
  };
  const addToppingsOnClick = () => {
    const pizzaToppings = [...pizza.toppings, "cheese"];
    const newPizza = { ...pizza, toppings: pizzaToppings };
    setPizza(newPizza);
  };
  const setProductQuantity = () => {
    const newItems = cart.items.map((item) =>
      item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    );
    const newCart = { ...cart, items: newItems };
    setCart(newCart);
  };

  return (
    <>
      <div>
        {pizza.name}:{" "}
        {pizza.toppings.map((topping, index) => (
          <div key={index}>{topping}</div>
        ))}
      </div>
      <button onClick={addToppingsOnClick}>Add cheese</button>

      <div>
        {cart.items.map((item, index) => (
          <div key={index}>
            {item.id}, {item.title}, {item.quantity}
          </div>
        ))}
        <button onClick={setProductQuantity}>Add quantity</button>
      </div>
    </>
  );
}

export default App;

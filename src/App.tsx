import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState([]);

  const connect = () => {
    console.log("Connecting");
  };
  const disconnect = () => {
    console.log("Disconnecting");
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
    });
  });

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
    </>
  );
}

export default App;

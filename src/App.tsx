import "./App.css";
import ContactList from "./components/ContactList";

/*
 * This exercise is straightforward: fetch the data
 * from this url, and display it however you like. You can
 * add libraries as you see fit, or not. This should be
 * a brief exercise. There's no need to style properly, or
 * handle pagination.
 */

function App() {
  const json_url = "https://gorest.co.in/public-api/users";
  return <ContactList jsonUrl={json_url}></ContactList>;
}

export default App;

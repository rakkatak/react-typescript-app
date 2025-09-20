import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const onSelectListItem = (item: string) => {
    console.log("Selected item:", item);
  };

  const cities = ["Toronto", "Montreal", "St Johns"];

  return (
    <>
      <ListGroup
        items={cities}
        heading={"Cool Cities"}
        onSelectItem={onSelectListItem}
      ></ListGroup>
    </>
  );
}

export default App;

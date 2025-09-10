import "./App.css";
import AnitaList from "./components/AnitaList";

function App() {
  let items = ["toronto", "montreal", "ottawa", "vancouver"];
  let heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <AnitaList
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></AnitaList>
    </>
  );
}

export default App;

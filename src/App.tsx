import { useState } from "react";
import "./App.css";
import AlertButton from "./components/AlertButton";
import Alert from "./components/Alert";
import AnitaList from "./components/AnitaList";
import Message from "./components/Message";

function App() {
  let [displayAlert, setDisplayAlert] = useState(false);
  let [contact, setContact] = useState({
    name: "anita k",
    address: {
      number: 26,
      street: "clinton",
      city: "toronto",
      country: "canada",
      postalCode: "m6m2m2",
    },
  });
  let [tags, setTags] = useState(["tabla", "sitar", "indian classical"]);
  const handleButtonClick = () => {
    setDisplayAlert(true);
    console.log("handleButtonClick", displayAlert);
  };
  const handleButtonClick2 = () => {
    // drink.name = "tea";
    // drink.price = 3;
    setContact({
      ...contact,
      address: {
        ...contact.address,
        postalCode: "lalala",
      },
    });
  };
  const handleButtonClick3 = () => {
    // drink.name = "tea";
    // drink.price = 3;

    let updatedTags0 = [...tags, "bansuri"];

    console.log("updatedTags0", updatedTags0);

    let updatedTags1 = updatedTags0.filter((tag) => {
      return tag !== "tabla" ? tag : "";
    });

    console.log("updatedTags", updatedTags1);

    let updatedTags2 = updatedTags1.map((tag) => {
      return tag === "sitar" ? "sur bahar" : tag;
    });

    console.log("updatedTags2", updatedTags2);

    setTags(updatedTags2);
  };

  const onAlertClose = () => {
    setDisplayAlert(false);
    console.log("onAlertClose", displayAlert);
  };

  const onSelectListItem = (item: string) => {
    console.log("Selected item:", item);
  };

  const cities = ["Toronto", "Montreal", "St Johns"];

  return (
    <>
      {displayAlert && <Alert onClose={onAlertClose}>Holy Guacamole</Alert>}

      <AlertButton
        handleButtonClick={handleButtonClick}
        buttonColour="primary"
      ></AlertButton>
      <div>
        Tags: &nbsp;
        {tags.map((tag, index) => {
          return <div key={index}>{tag}</div>;
        })}
        <button onClick={handleButtonClick3}>click me</button>
      </div>

      <AnitaList
        items={cities}
        heading={"Cool Cities"}
        onSelectItem={onSelectListItem}
      ></AnitaList>
    </>
  );
}

export default App;

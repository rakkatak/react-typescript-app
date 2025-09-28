import { useState } from "react";
import "./App.css";
import AlertButton from "./components/AlertButton";
import Alert from "./components/Alert";
import AnitaList from "./components/AnitaList";

function App() {
  let [displayAlert, setDisplayAlert] = useState(false);
  const handleButtonClick = () => {
    setDisplayAlert(true);
    console.log("handleButtonClick", displayAlert);
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

      <AnitaList
        items={cities}
        heading={"Cool Cities"}
        onSelectItem={onSelectListItem}
      ></AnitaList>
    </>
  );
}

export default App;

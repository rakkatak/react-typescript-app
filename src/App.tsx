import { useState } from "react";
import "./App.css";
import AlertButton from "./components/AlertButton";
import Alert from "./components/Alert";

function App() {
  let [displayAlert, setDisplayAlert] = useState(false);
  const handleButtonClick = () => {
    console.log("handleButtonClick");
    setDisplayAlert(true);
  };

  const onAlertClose = () => {
    console.log("onAlertClose");
    setDisplayAlert(false);
  };

  return (
    <>
      {displayAlert && <Alert onClose={onAlertClose}>Holy Guacamole</Alert>}

      <AlertButton
        handleButtonClick={handleButtonClick}
        buttonColour="primary"
      ></AlertButton>
    </>
  );
}

export default App;

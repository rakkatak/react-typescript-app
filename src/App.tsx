import "./App.css";
import Alert from "./components/Alert";
import AnitaButton from "./components/AnitaButton";

function App() {
  const handleButtonClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Alert>
        Alert <span>fool!</span>
      </Alert>
      <AnitaButton
        handleButtonClick={handleButtonClick}
        unclickedColor="info"
        clickedColor="danger"
      >
        Anita Button
      </AnitaButton>
    </>
  );
}

export default App;

import "./App.css";
import Alert from "./components/Alert";
import AnitaButton from "./components/AnitaButton";

function App() {
  const handleButtonClick = () => {
    console.log("Do something.");
  };
  return (
    <>
      <Alert>
        Alert <span>fool!</span>
      </Alert>
      <AnitaButton clickedClass="danger" handleButtonClick={handleButtonClick}>
        Anita Button
      </AnitaButton>
    </>
  );
}

export default App;

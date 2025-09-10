import "./App.css";
import Alert from "./components/Alert";
import AnitaButton from "./components/AnitaButton";

function App() {
  const onButtonClick = () => {
    alert("hello2");
  };

  return (
    <>
      <Alert>
        Pay attention <span>fool</span>!
      </Alert>
      <AnitaButton onButtonClick={onButtonClick}>Anita Button</AnitaButton>
    </>
  );
}

export default App;

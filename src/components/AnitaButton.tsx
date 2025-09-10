import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const AnitaButton = ({ children }: Props) => {
  const [toggleClicked, setToggleClicked] = useState(-1);
  const handleButtonClick = () => {
    setToggleClicked(toggleClicked * -1);
    // alert(toggleClicked);
  };
  return (
    <button
      type="button"
      className={toggleClicked == 1 ? "btn btn-primary" : "btn btn-secondary"}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

export default AnitaButton;

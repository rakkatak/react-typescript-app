import { ReactNode, useState } from "react";

interface Props {
  children: string;
  handleButtonClick: () => void;
  unclickedClass?: "primary" | "secondary" | "danger";
  clickedClass?: "primary" | "secondary" | "danger";
}

const AnitaButton = ({
  children,
  handleButtonClick,
  unclickedClass = "primary",
  clickedClass = "secondary",
}: Props) => {
  const [toggleClicked, setToggleClicked] = useState(-1);
  const handleButtonClickandState = () => {
    setToggleClicked(toggleClicked * -1);
    handleButtonClick();
  };
  return (
    <button
      type="button"
      className={
        toggleClicked == 1
          ? "btn btn-" + unclickedClass
          : "btn btn-" + clickedClass
      }
      onClick={handleButtonClickandState}
    >
      {children}
    </button>
  );
};

export default AnitaButton;

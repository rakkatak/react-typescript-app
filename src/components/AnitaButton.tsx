import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  handleButtonClick: () => void;
  unclickedColor?: string;
  clickedColor?: string;
}

const AnitaButton = ({
  children,
  handleButtonClick,
  unclickedColor = "secondary",
  clickedColor = "primary",
}: Props) => {
  const [toggleClicked, setToggleClicked] = useState(-1);
  const buttonClickAndStyle = () => {
    handleButtonClick();
    setToggleClicked(toggleClicked * -1);
  };

  return (
    <button
      type="button"
      className={
        toggleClicked == 1
          ? "btn btn-" + clickedColor
          : "btn btn-" + unclickedColor
      }
      onClick={buttonClickAndStyle}
    >
      {children}
    </button>
  );
};

export default AnitaButton;

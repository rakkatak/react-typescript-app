import React, { useState } from "react";

interface Props {
  buttonColour: "primary" | "secondary" | "danger" | "info";
  handleButtonClick: () => void;
}

const AlertButton = ({ buttonColour, handleButtonClick }: Props) => {
  return (
    <>
      <button onClick={handleButtonClick} className={"btn btn-" + buttonColour}>
        Alert button
      </button>
    </>
  );
};

export default AlertButton;

import React, { useState } from "react";

interface Props {
  buttonColour: "primary" | "secondary" | "danger" | "info";
}

const AlertButton = ({ buttonColour }: Props) => {
  let [displayAlert, setDisplayAlert] = useState(false);
  const handleButtonClick = () => {
    setDisplayAlert(!displayAlert);
    console.log(displayAlert);
  };
  return (
    <>
      {displayAlert ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}
      <button onClick={handleButtonClick} className={"btn btn-" + buttonColour}>
        Alert button
      </button>
    </>
  );
};

export default AlertButton;

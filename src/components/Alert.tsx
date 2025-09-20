import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode; // keyword use to define properties passed in as children
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  let alertMarkup = <div></div>;

  alertMarkup = (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
  return alertMarkup;
};

export default Alert;

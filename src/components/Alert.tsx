import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode; // keyword use to define properties passed in as children
  display?: boolean;
}

const Alert = ({ children, display = false }: Props) => {
  let alertMarkup = <div></div>;
  console.log("Alert display", display);

  if (display) {
    alertMarkup = <div className="alert alert-primary">{children}</div>;
  }
  return alertMarkup;
};

export default Alert;

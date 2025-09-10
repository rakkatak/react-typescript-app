import { ReactNode } from "react";

interface Props {
  children: ReactNode; // keyword use to define properties passed in as children
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

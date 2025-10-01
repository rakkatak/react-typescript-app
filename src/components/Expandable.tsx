import { ReactNode, useState } from "react";

interface Props {
  maxLength?: number;
  children: string;
}

const Expandable = ({ maxLength: maxLength = 50, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const onExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  if (children.length < maxLength) return <div>{children}</div>;

  return (
    <>
      <div>
        {isExpanded
          ? children
          : children.toString().substring(0, maxLength) + "..."}
      </div>
      <button onClick={onExpandCollapse}>
        {isExpanded === true ? "Less" : "More"}
      </button>
    </>
  );
};

export default Expandable;

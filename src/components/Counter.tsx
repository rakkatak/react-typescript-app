import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const prevValue = useRef<number | null>(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current: {value}</p>
      <p>Previous: {prevValue.current}</p>
    </div>
  );
}

export default Counter;

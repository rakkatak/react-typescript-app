import { useEffect, useRef } from "react";
import Counter from "./components/Counter";

function App() {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref2.current) ref2.current.focus();
  });

  return (
    <>
      <input id="input1" type="text" className="form-control" ref={ref1} />
      <input id="input2" type="text" className="form-control" ref={ref2} />
    </>
  );
}

export default App;

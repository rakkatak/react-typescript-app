import { useEffect, useRef } from "react";
import Counter from "./components/Counter";

function App() {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    if (ref2.current) ref2.current.focus();
    connect();

    return () => disconnect();
  });

  return (
    <>
      <input id="input1" type="text" className="form-control" ref={ref1} />
      <input id="input2" type="text" className="form-control" ref={ref2} />
    </>
  );
}

export default App;

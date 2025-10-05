import { FormEvent, useRef, useState } from "react";

const FormV2 = () => {
  const person = { name: "", age: 0 };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log("person", person);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        ></input>
        <div className="mp-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormV2;

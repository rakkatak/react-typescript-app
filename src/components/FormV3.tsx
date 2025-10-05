import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("person", person);
  };

  const [person, setPerson] = useState({ name: "", age: 0 });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          id="name"
          type="text"
          value={person.name}
          className="form-control"
        ></input>
        <div className="mp-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) => {
              setPerson({ ...person, age: parseInt(event.target.value) });
            }}
            id="age"
            type="number"
            className="form-control"
            value={person.age != 0 ? person.age : ""}
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

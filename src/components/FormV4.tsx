import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const FormV4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Nested destructuring
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
        ></input>
        <div className="mp-3">
          {errors.name?.type == "required" && (
            <p className="text-danger">Name is required</p>
          )}
          {errors.name?.type == "minLength" && (
            <p className="text-danger">
              The name must be at least 3 characters
            </p>
          )}
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormV4;

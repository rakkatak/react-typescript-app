import { FieldValues, useForm } from "react-hook-form";
import { Expense } from "../models/Expense";

interface Props {
  addExpense: (expense: Expense) => void;
}
const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Expense>();

  const onSubmit = (data: Expense) => {
    console.log(data);
    addExpense(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mp-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Description is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">
              Description should be at least 3 characters.
            </p>
          )}

          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            {...register("amount", { required: true })}
            className="form-control"
            id="amount"
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required</p>
          )}
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-control"
            {...register("category", { required: true })}
            defaultValue={""}
          >
            {" "}
            <option disabled value="">
              Select an option
            </option>
            <option value="groceries">Groceries</option>
            <option value="entertainment">Entertainment</option>
            <option value="transportation">Transportation</option>
          </select>

          {errors.category?.type === "required" && (
            <p className="text-danger">Category is required</p>
          )}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;

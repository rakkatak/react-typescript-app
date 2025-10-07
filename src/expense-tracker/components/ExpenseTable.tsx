import { Expense } from "../../models/Expense";
import "./ExpenseTable.css";

interface Props {
  expenses: Expense[];
  deleteItem: (e: Expense) => void;
}

// TODO: add delete button
const ExpenseTable = ({ expenses, deleteItem }: Props) => {
  const formatAsDollarAmount = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => {
            return (
              <tr key={index}>
                <th>{expense.description}</th>
                <th>{formatAsDollarAmount(expense.amount)}</th>
                <th>{expense.category}</th>
                <th>
                  <button
                    onClick={() => {
                      deleteItem(expense);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            <th>
              {formatAsDollarAmount(
                expenses.reduce((sum: number, expense: Expense) => {
                  return sum + Number(expense.amount);
                }, 0)
              )}
            </th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;

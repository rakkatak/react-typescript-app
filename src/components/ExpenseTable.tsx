import { Expense } from "../models/Expense";
import "./ExpenseTable.css";

interface Props {
  expenses: Expense[];
}

const ExpenseTable = ({ expenses }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => {
            return (
              <tr key={index}>
                <th>{expense.description}</th>
                <th>{expense.amount}</th>
                <th>{expense.category}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;

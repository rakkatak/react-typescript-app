import { Expense } from "../../models/Expense";
import "./ExpenseTable.css";

interface Props {
  expenses: Expense[];
  deleteItem: (e: Expense) => void;
}

const ExpenseTable = ({ expenses, deleteItem }: Props) => {
  return (
    <>
      <table className="table table-bordered">
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
                <th>${Number(expense.amount).toFixed(2)}</th>
                <th>{expense.category}</th>
                <th>
                  <button
                    onClick={() => {
                      deleteItem(expense);
                    }}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              $
              {expenses
                .reduce((sum: number, expense: Expense) => {
                  return sum + Number(expense.amount);
                }, 0)
                .toFixed(2)}
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseTable;

import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { Expense } from "./models/Expense";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (e: Expense) => {
    setExpenses([...expenses, e]);
    console.log("Expenses", expenses);
  };
  return (
    <>
      <ExpenseForm addExpense={addExpense}></ExpenseForm>
      <ExpenseTable expenses={expenses}></ExpenseTable>
    </>
  );
}

export default App;

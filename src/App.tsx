import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import { Expense } from "./models/Expense";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  const addExpense = (e: Expense) => {
    setExpenses([...expenses, e]);
    setFilteredExpenses([...expenses, e]);
    console.log("Expenses", expenses);
  };

  const filterByCategory = () => {
    if (categoryFilter !== "") {
      const updatedExpenses = expenses.filter(
        (expense) => expense.category === categoryFilter
      );
      setFilteredExpenses(updatedExpenses);
    } else {
      setFilteredExpenses(expenses);
    }
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense}></ExpenseForm>
      <ExpenseFilter
        filterByCategory={filterByCategory}
        setCategoryFilter={setCategoryFilter}
      ></ExpenseFilter>
      <ExpenseTable expenses={filteredExpenses}></ExpenseTable>
    </>
  );
}

export default App;

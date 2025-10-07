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
    if (e.category === categoryFilter) {
      setFilteredExpenses([...filteredExpenses, e]);
    }
    // console.log("Expenses", expenses);
  };

  const filterByCategory = (categoryFilterParam: string) => {
    // console.log("categoryFilter", categoryFilterParam);
    setCategoryFilter(categoryFilterParam);
    if (categoryFilterParam !== "") {
      // console.log("categoryFilter not empty");
      setFilteredExpenses(
        expenses.filter((expense) => expense.category === categoryFilterParam)
      );
      // console.log("categoryFilter not empty, updatedExpenses", updatedExpenses);
    }
  };

  const deleteExpenseItem = (expenseToBeDeleted: Expense) => {
    let updatedExpense: Expense[] = expenses.filter(
      (expense) => expense !== expenseToBeDeleted
    );
    setExpenses(updatedExpense);
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense}></ExpenseForm>
      <ExpenseFilter filterByCategory={filterByCategory}></ExpenseFilter>
      <ExpenseTable
        deleteItem={deleteExpenseItem}
        expenses={categoryFilter === "" ? expenses : filteredExpenses}
      ></ExpenseTable>
    </>
  );
}

export default App;

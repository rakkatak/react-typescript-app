import { useState } from "react";
import "./App.css";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { Expense } from "./models/Expense";
import ExpenseTable from "./expense-tracker/components/ExpenseTable";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  const visibleExpenses =
    categoryFilter === ""
      ? expenses
      : expenses.filter((expense) => expense.category === categoryFilter);

  const addExpense = (e: Expense) => {
    setExpenses([...expenses, { ...e, id: expenses.length + 1 }]);
  };

  const filterByCategory = (categoryFilterParam: string) => {
    // console.log("categoryFilter", categoryFilterParam);
    setCategoryFilter(categoryFilterParam);
  };

  const deleteExpenseItem = (expenseToBeDeleted: Expense) => {
    let updatedExpense: Expense[] = expenses.filter(
      (expense) => expense.id !== expenseToBeDeleted.id
    );
    setExpenses(updatedExpense);
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense}></ExpenseForm>
      <ExpenseFilter filterByCategory={filterByCategory}></ExpenseFilter>
      <ExpenseTable
        deleteItem={deleteExpenseItem}
        expenses={visibleExpenses}
      ></ExpenseTable>
    </>
  );
}

export default App;

import { ChangeEvent } from "react";

interface Props {
  filterByCategory: (filter: string) => void;
}

const ExpenseFilter = ({ filterByCategory: filterByCategory }: Props) => {
  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    filterByCategory(event.target.value);
  };
  return (
    <>
      <select
        id="category"
        className="form-control"
        defaultValue=""
        onChange={onChangeFilter}
      >
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
      </select>
    </>
  );
};

export default ExpenseFilter;

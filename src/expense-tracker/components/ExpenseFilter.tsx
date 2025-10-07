import { ChangeEvent } from "react";

interface Props {
  filterByCategory: (filter: string) => void;
}

const ExpenseFilter = ({ filterByCategory }: Props) => {
  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    filterByCategory(event.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <select
          id="category"
          className="form-select"
          defaultValue=""
          onChange={onChangeFilter}
        >
          <option value="">All categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;

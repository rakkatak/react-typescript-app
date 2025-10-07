import { ChangeEvent } from "react";
import { categories } from "../../models/Categories";

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
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;

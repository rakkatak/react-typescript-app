import { ChangeEvent } from "react";

interface Props {
  setCategoryFilter: (filter: string) => void;
  filterByCategory: () => void;
}

const ExpenseFilter = ({
  setCategoryFilter: setCategoryFilter,
  filterByCategory: filterByCategory,
}: Props) => {
  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("Filter", event.target.value);
    setCategoryFilter(event.target.value);
    filterByCategory();
  };
  return (
    <>
      <select
        id="category"
        className="form-control"
        defaultValue=""
        onChange={onChangeFilter}
      >
        {" "}
        <option disabled value="">
          All categories
        </option>
        <option value="groceries">Groceries</option>
        <option value="entertainment">Entertainment</option>
        <option value="transportation">Transportation</option>
      </select>
    </>
  );
};

export default ExpenseFilter;

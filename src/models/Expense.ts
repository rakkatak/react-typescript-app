import Category from "./Category";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: Category;
}

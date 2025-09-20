import { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["cloting", "household"]);
  }, [category]);

  return <div>Product List</div>;
};

export default ProductList;

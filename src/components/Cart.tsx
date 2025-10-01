interface Props {
  cartItems: string[];
  clearItems: () => void;
}

const Cart = ({ cartItems, clearItems }: Props) => {
  return (
    <>
      {cartItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <button onClick={clearItems}>Clear</button>
    </>
  );
};

export default Cart;

let count: number = 0;

const message = () => {
  console.log("***** rendering message", count);
  count++;
  return <div>Count: {count}</div>;
};

export default message;

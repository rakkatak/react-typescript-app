function AnitaList() {
  let items = ["toronto", "montreal", "ottawa", "vancouver"];
  let selectedIndex = 0;

  const getMessage = () => {
    return items.length === 0 && "No items";
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                selectedIndex = index;
                alert(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AnitaList;

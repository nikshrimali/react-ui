import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}:Props) {
  //Hook
  const[selectedIndex, setSelectedIndex] = useState(-1)
  // Setting usestate to -1 returns a array, setSelectedIndex is passed with the selectedIndex and the function sets the selectedIndex
  // items = [];

  // if (items.length === 0)
  //   return <p>No item found</p>

  const message = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    items.length === 0 ? <p>No items found</p> : null;
    // items.map((item) => (
    //   <ul><li key={item}>{item}</li></ul>
    // ));
  };

  // if (/)
  return (
    <>
      <h1>Any random headding</h1>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        //Need to add key to each item for making react uniquely identify each element hence added item as key
        <ul className="list-group">
          {items.length === 0 && <p>No items found</p>}
        </ul>
      )}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

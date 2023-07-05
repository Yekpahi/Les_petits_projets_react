import React from "react";
import ListItems from "./ListItems";

function NumberList(props) {
  const nums = props.numbers
  const listItems = nums.map((number) => 
  <ListItems key={number.toString} value = {number} />
  );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default NumberList;

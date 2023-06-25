import React from "react";

const my = () => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <select name="" id="" onChange={handleChange}>
        <option value="11">aaaaa</option>
        <option value="22">bbbbbbbbbb</option>
        <option value="33">cccccccccccc</option>
        <option value="44">ddddddddddddd</option>
      </select>
    </div>
  );
};

export default my;

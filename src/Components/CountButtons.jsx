import React from "react";

const CountButtons = ({ number, setNumber }) => {
  const handelClickPlus = () => {
    setNumber(number + 1);
  };
  const handelClickMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={handelClickPlus}>+</button>
      <button onClick={handelClickMinus}>-</button>
    </div>
  );
};

export default CountButtons;

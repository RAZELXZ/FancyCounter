import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

const CountButtons = ({ number, setNumber }) => {
  const handelClickPlus = () => {
    setNumber(number + 1);
  };
  const handelClickMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div className="button-container">
      <button className="count-btn" onClick={handelClickMinus}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn" onClick={handelClickPlus}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};

export default CountButtons;

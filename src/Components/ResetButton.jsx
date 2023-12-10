import React from "react";
const ResetButton = ({ setNumber }) => {
  const handelClick = () => {
    setNumber(0);
  };
  return <button onClick={handelClick}>Reset</button>;
};

export default ResetButton;

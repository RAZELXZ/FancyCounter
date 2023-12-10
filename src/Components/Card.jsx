import React, { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
  const [number, setNumber] = useState(5);
  return (
    <div>
      <Title />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <CountButtons number={number} setNumber={setNumber} />
    </div>
  );
};

export default Card;

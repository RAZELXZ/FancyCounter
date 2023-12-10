import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
  const [number, setNumber] = useState(0);
  const locked = number === 10 ? true : false;
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count number={number} />
      <ResetButton setNumber={setNumber} />
      <CountButtons setNumber={setNumber} />
    </div>
  );
};

export default Card;

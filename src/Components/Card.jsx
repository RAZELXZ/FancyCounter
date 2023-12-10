import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

const Card = () => {
  const [number, setNumber] = useState(0);
  const locked = number === 10 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newNumber = number + 1;
        if (newNumber > 10) {
          setNumber(10);
          return;
        }
        setNumber(number + 1);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [number]);

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

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ setNumber }) => {
  const handelClickPlus = () => {
    setNumber((prev) => {
      const newCount = prev + 1;
      if (newCount > 10) {
        return 10;
      }
      return newCount;
    });
  };
  const handelClickMinus = () => {
    setNumber((prev) => {
      const newCount = prev - 1;
      if (newCount < 0) {
        return 0;
      }
      return newCount;
    });
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

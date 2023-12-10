import { ResetIcon } from "@radix-ui/react-icons";
const ResetButton = ({ setNumber }) => {
  const handelClick = (event) => {
    setNumber(0);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handelClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;

import { ResetIcon } from "@radix-ui/react-icons";
const ResetButton = ({ setNumber }) => {
  const handelClick = () => {
    setNumber(0);
  };
  return (
    <button className="reset-btn" onClick={handelClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;

import { CustomCheckboxProps } from ".";

const UseContainer = ({ onChange }: CustomCheckboxProps) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value, event.target.checked);
  };
  return {
    functions: { handleCheckboxChange },
    states: {},
  };
};

export default UseContainer;

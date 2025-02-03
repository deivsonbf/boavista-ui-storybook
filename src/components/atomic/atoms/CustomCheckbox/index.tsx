import UseContainer from "./container";
import { CheckboxLabel, StyledWrapper } from "./index.styled";

export interface CustomCheckboxProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  custom?: React.CSSProperties;
  onChange?: (value: string, checked: boolean) => void;
}

const CustomCheckbox = ({
  label,
  id,
  name,
  value,
  onChange,
}: CustomCheckboxProps) => {
  const { functions } = UseContainer({ onChange });

  return (
    <StyledWrapper>
      <input
        id={id}
        name={name}
        type="checkbox"
        className="ui-checkbox"
        value={value}
        onChange={(event) => functions.handleCheckboxChange(event)}
      />
      <CheckboxLabel htmlFor={label}>{label}</CheckboxLabel>
    </StyledWrapper>
  );
};
export default CustomCheckbox;

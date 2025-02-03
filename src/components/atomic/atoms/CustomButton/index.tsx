import { ButtonVariant } from "../../../../utils/types/Types";
import { StyledButton } from "./style.styled";

interface ButtonProps {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: ButtonVariant,
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties;
    disabled?: boolean
    onClick?: () => void;
}
const CustomButton = ({ label, startIcon, endIcon, variant, size, style, disabled, onClick }: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            $variant={variant}
            $size={size}
            disabled={disabled}
            style={style}
        >
            {startIcon}
            {label}
            {endIcon}
        </StyledButton>
    )
}

export default CustomButton
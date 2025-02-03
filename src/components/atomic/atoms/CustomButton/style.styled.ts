import { styled, css } from "styled-components";
import { default_theme } from '../../../../themes/CustomThemes';
import { ButtonVariant } from "../../../../utils/types/Types";


interface StyledButtonProps {
    $variant?: ButtonVariant | string;
    disabled?: boolean;
    $position?: string
    $size?: 'small' | 'medium' | 'large';
}

const buttonVariants = {
    text: css`
        background-color: transparent;
        color: ${default_theme.colors.primary.azul_institucional};
    `,
    contained: css`
        background-color: ${default_theme.colors.primary.azul_institucional};
        color: #fff;
    `,
    outlined: css`
        background-color: transparent;
        border: 1px solid ${default_theme.colors.primary.azul_institucional};
        color: ${default_theme.colors.primary.azul_institucional};
    `,
    noVariant: css`
        background-color: ${default_theme.colors.grey.neutralGrey};
        color: ${default_theme.colors.primary.azul_institucional};
    `
}

const buttonSizes = {
    default: css`
        padding: 8px;
    `,
    small: css`
        padding: 10px;
    `,
    medium: css`
        padding: 12px;
    `,
    large: css`
        padding: 14px ;
    `,
    noSize: css``
}


export const StyledButton = styled.button<StyledButtonProps>`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
    border: none;
    font-size: 14px;
    font-family: ${default_theme.font.family};
    font-style: normal;
    font-weight: 500;
    border-radius: 3px;
    ${({ $variant }) => $variant ? buttonVariants[$variant as keyof typeof buttonVariants] : buttonVariants['noVariant']}   
    ${({ $size }) => $size ? buttonSizes[$size as keyof typeof buttonSizes] : buttonSizes['default'] }   
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    opacity: ${({ disabled }) => disabled ? 0.6 : 1};

    svg {
        font-size: 1.25rem;
    }

    &:hover {
        font-weight: ${({ disabled }) => disabled ? 500 : 700};
    }
   
`
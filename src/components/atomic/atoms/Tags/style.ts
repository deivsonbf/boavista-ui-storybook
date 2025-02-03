import styled, { css } from "styled-components";
import { default_theme } from "../../../../themes/CustomThemes";

interface StyledTagProps {
    $variant?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tagVariants : any = {
    success: css`
        background-color: ${default_theme.colors.status.success};
        color: ${default_theme.colors.status.darkSuccess}; ;
    `,
    error: css`
         background-color: ${default_theme.colors.status.error};
         color: ${default_theme.colors.status.darkError}; ;
    `,
    warning: css`
       background-color: ${default_theme.colors.status.warning};
       color: ${default_theme.colors.status.darkError};
    `,
    neutral: css`
         background-color: ${default_theme.colors.status.neutral2};
         color: ${default_theme.colors.primary.azul_institucional}; ;
    `,
     noVariant: css`
        background-color: ${default_theme.colors.grey.neutralGrey};
        color: ${default_theme.colors.grey.darkGrey};    
    `,
    solid: css`
        background-color: ${default_theme.colors.status.neutral1};
        color: #fff;
        border-radius: 9px;
    `
}

export const StyledTag = styled.div<StyledTagProps>`
    width: fit-content;
    padding: 6px;
    border-radius: 5px;
    font-weight: 500;
    font-family: ${default_theme.font.family};
    ${({ $variant })  => !$variant ?  tagVariants['noVariant'] : tagVariants[$variant]};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    white-space: nowrap;
    text-transform: uppercase;
`;

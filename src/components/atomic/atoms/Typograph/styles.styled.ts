import styled, { css } from "styled-components";
import { default_theme } from "../../../../themes/CustomThemes";
import { TypographColorsOptions, TypographVariant } from "../../../../utils/types/Types";

interface TypographProps {
    $variant?: TypographVariant;
    $margin?: boolean;
    $align?: string;
    $color?: TypographColorsOptions;
    style?: React.CSSProperties;
}

const TypographVariants = {
    headline: css`
        font-size: 24px;
    `,
    subtitle: css`
        font-size: 18px;
    `,
    body: css`
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
    `,
    caption: css`
        font-size: 12px;
    `,
}

const TypographColors = {
    primary: css`
        color: ${default_theme.colors.primary.azul_institucional};
    `,
    secondary: css`
        color: ${default_theme.colors.primary.laranja_extrato_card};
    `,
    success: css`
        color: ${default_theme.colors.status.darkSuccess};
    `,
    error: css`
        color: ${default_theme.colors.status.darkError};
    `,
    warning: css`
        color: ${default_theme.colors.status.warning};
    `,
    neutral1: css`
        color: ${default_theme.colors.status.neutral1};
    `,
    neutral2: css`
        color: ${default_theme.colors.status.neutral2};
    `,
    default: css`
        color: #242424;
    `
}

export const StyledTypograph = styled.div<TypographProps>`
    text-align: ${({ $align }) => $align || 'left'};
    font-family: ${default_theme.font.family};
    font-weight: 400;
    font-style: normal;
    ${({ $color }) => $color && TypographColors[$color as keyof typeof TypographColors] || TypographColors['default']}
    ${({ $margin }) => $margin && "margin-bottom: 30px;"}
    ${({ $variant = TypographVariants.headline }) => $variant && TypographVariants[$variant as keyof typeof TypographVariants] || TypographVariants.headline}
`


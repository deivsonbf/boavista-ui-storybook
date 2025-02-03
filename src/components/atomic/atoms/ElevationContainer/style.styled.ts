import { styled, css } from "styled-components";
import { default_theme } from "../../../../themes/CustomThemes";
import { ElevationVariant } from "../../../../utils/types/Types";


interface ElevationProps {
    $variant?: ElevationVariant
}

const elevationVariants = {
    card: css`
        box-shadow: 0px 1px 4px rgba(9, 30, 66, 0.16);
    `,
    modal: css`
        box-shadow: 0px 6px 36px rgba(9, 30, 66, 0.05);
    `,
    notification: css`
        box-shadow: 0px 6px 36px 0px rgba(9, 30, 66, 0.05);
    `,
    box: css`
        box-shadow: 0px 6px 15px 4px rgba(9, 30, 66, 0.1);
    `,
    warning: css`
        box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.1);
    `,
    panel: css`
        box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.25);
    `
}

export const Elevation = styled.div<ElevationProps>`
    margin-bottom: 1rem;
    padding: 20px;
    font-family: ${default_theme.font.family};
    ${({ $variant }) => $variant ? elevationVariants[$variant] : ''}
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #000
`

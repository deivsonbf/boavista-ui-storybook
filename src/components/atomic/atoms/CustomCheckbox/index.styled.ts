import styled from "styled-components";
import { default_theme } from "../../../../themes/CustomThemes";

  export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-family: ${default_theme.font.family};
  color:  ${default_theme.colors.primary.azul_institucional};
  `;
  
  export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .ui-checkbox {
    --secondary-color: #fff;
    --primary-hover-color: #4096ff;

    --checkbox-diameter: 20px;
    --checkbox-border-radius: 5px;
    --checkbox-border-color: #dfe1e6;
    --checkbox-border-width: 3px;
    --checkbox-border-style: solid;

    --checkmark-size: 1.2;
  }

  .ui-checkbox,
  .ui-checkbox *,
  .ui-checkbox *::before,
  .ui-checkbox *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ui-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--checkbox-diameter);
    height: var(--checkbox-diameter);
    border-radius: var(--checkbox-border-radius);
    background: #fafbfc;
    border: var(--checkbox-border-width) var(--checkbox-border-style)
      var(--checkbox-border-color);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;
  }

  .ui-checkbox::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5)
      var(--primary-color);
    box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
    border-radius: inherit;
    opacity: 0;
    -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  }

  .ui-checkbox::before {
    top: 42%;
    left: 50%;
    content: "";
    position: absolute;
    width: 3px;
    height: 6px;
    border-right: 2px solid ${default_theme.colors.grey.darkGrey};
    border-bottom: 2px solid ${default_theme.colors.grey.darkGrey};
    -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
    opacity: 0;
    -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
      opacity 0.1s;
    -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  }

  .ui-checkbox:checked {
    background: ${default_theme.colors.grey.neutralGrey};
    border-color: transparent;
  }

  .ui-checkbox:checked::before {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(45deg)
      scale(var(--checkmark-size));
    -ms-transform: translate(-50%, -50%) rotate(45deg)
      scale(var(--checkmark-size));
    transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }
`;
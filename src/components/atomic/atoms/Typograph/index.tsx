import { TypographColorsOptions, TypographVariant } from "../../../../utils/types/Types";
import { StyledTypograph } from "./styles.styled";

interface TypographProps {
  children?: React.ReactNode;
  variant?: TypographVariant;
  align?: string;
  color?: TypographColorsOptions;
  margin?: boolean;
  style?: React.CSSProperties;
}
const Typograph = ({ children, variant, align, color, margin, style }: TypographProps) => {
  return (
    <StyledTypograph
      style={style}
      $variant={variant}
      $margin={margin}
      $align={align}
      $color={color}
    >
      <span style={{display: 'inlineBlock'}}>{children}</span>
    </StyledTypograph>
  )
}

export default Typograph
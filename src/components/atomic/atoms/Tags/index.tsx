import { StyledTag } from "./style";

export interface TagsProps {
    label: string;
    style?: React.CSSProperties;
    variant?: string
}

const Tag = ({ label, style, variant }: TagsProps) => {
    return (
        <StyledTag 
            $variant={variant}
            style={style}
        >
            {label}
        </StyledTag>
    )
}

export default Tag
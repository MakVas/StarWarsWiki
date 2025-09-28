import { StyledButton } from './Button.css.ts';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;

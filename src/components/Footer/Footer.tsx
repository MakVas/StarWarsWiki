import { StyledFooter } from './Footer.css.ts';
import NavMenu from '../Navigation/NavMenu.tsx';

interface FooterProps {
    onClick: (route: string) => void;
    active?: string;
}

function Footer({ onClick, active }: FooterProps) {
    return (
        <StyledFooter>
            <NavMenu onClick={onClick} active={active} />
            <p>&copy; Makovii Andrii. All Rights Reserved</p>
        </StyledFooter>
    );
}

export default Footer;

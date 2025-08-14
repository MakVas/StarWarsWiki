import { logoSrc } from '../../utils/constants.ts';

import { StyledHeader, HeaderImage } from './Header.css.ts';
import NavMenu from '../Navigation/NavMenu.tsx';

interface HeaderProps {
    onClick: (route: string) => void;
    active?: string;
}

function Header({ onClick, active }: HeaderProps) {
    return (
        <StyledHeader>
            <HeaderImage
                src={logoSrc}
                alt={'Star Wars logo'}
                width={'200px'}
                onClick={() => onClick('home')}
            />
            <NavMenu onClick={onClick} active={active} isHeader={true} />
        </StyledHeader>
    );
}

export default Header;

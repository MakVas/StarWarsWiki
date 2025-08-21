import { NavLink } from 'react-router-dom';

import { logoSrc } from '../../utils/constants.ts';

import { StyledHeader, HeaderImage, NavBar } from './Header.css.ts';

function Header() {
    return (
        <StyledHeader>
            <NavLink to={'/'}>
                <HeaderImage
                    src={logoSrc}
                    alt={'Star Wars logo'}
                    width={'200px'}
                />
            </NavLink>
            <NavBar>
                <NavLink to={'/films'}>
                    <li>Films</li>
                </NavLink>
                <NavLink to={'/people'}>
                    <li>People</li>
                </NavLink>
                <NavLink to={'/planets'}>
                    <li>Planets</li>
                </NavLink>
                <NavLink to={'/starships'}>
                    <li>Starships</li>
                </NavLink>
                <NavLink to={'/vehicles'}>
                    <li>Vehicles</li>
                </NavLink>
            </NavBar>
        </StyledHeader>
    );
}

export default Header;

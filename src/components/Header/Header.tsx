import { logoSrc } from '../../utils/constants.ts';
import './Header.css';

interface HeaderProps {
    onClick: (route: string) => void;
    active?: string;
}

function Header({ onClick, active }: HeaderProps) {
    return (
        <header className={'header'}>
            <img
                className={'header__logo-image'}
                src={logoSrc}
                alt={'Star Wars logo'}
                width={'200px'}
                onClick={() => onClick('home')}
            />

            <ul className={'header__menu'}>
                <MenuItem
                    onClick={() => onClick('films')}
                    title={'Films'}
                    isActive={active === 'films'}
                />
                <MenuItem
                    onClick={() => onClick('people')}
                    title={'People'}
                    isActive={active === 'people'}
                />
                <MenuItem
                    onClick={() => onClick('planets')}
                    title={'Planets'}
                    isActive={active === 'planets'}
                />
                <MenuItem
                    onClick={() => onClick('vehicles')}
                    title={'Vehicles'}
                    isActive={active === 'vehicles'}
                />
                <MenuItem
                    onClick={() => onClick('starships')}
                    title={'Starships'}
                    isActive={active === 'starships'}
                />
            </ul>
        </header>
    );
}

interface MenuItemProps {
    onClick: () => void;
    title: string;
    isActive?: boolean;
}

function MenuItem({ onClick, title, isActive }: MenuItemProps) {
    let linkName = 'header__menu-link';
    if (isActive) linkName += ' active';

    return (
        <li className={'header__menu-item'}>
            <p className={linkName} onClick={onClick}>
                {title}
            </p>
        </li>
    );
}

export default Header;

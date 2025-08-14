import './NavMenu.css';

interface NavMenuProps {
    onClick: (route: string) => void;
    active?: string;
    isHeader?: boolean;
}

interface NavMenuItemProps {
    onClick: () => void;
    title: string;
    isActive?: boolean;
}

function NavMenu({ onClick, active, isHeader }: NavMenuProps) {
    return (
        <ul className={'navMenu'}>
            {!isHeader && (
                <NavMenuItem
                    onClick={() => onClick('home')}
                    title={'Home'}
                    isActive={active === 'home'}
                />
            )}
            <NavMenuItem
                onClick={() => onClick('films')}
                title={'Films'}
                isActive={active === 'films'}
            />
            <NavMenuItem
                onClick={() => onClick('people')}
                title={'People'}
                isActive={active === 'people'}
            />
            <NavMenuItem
                onClick={() => onClick('planets')}
                title={'Planets'}
                isActive={active === 'planets'}
            />
            <NavMenuItem
                onClick={() => onClick('vehicles')}
                title={'Vehicles'}
                isActive={active === 'vehicles'}
            />
            <NavMenuItem
                onClick={() => onClick('starships')}
                title={'Starships'}
                isActive={active === 'starships'}
            />
        </ul>
    );
}

function NavMenuItem({ onClick, title, isActive }: NavMenuItemProps) {
    let linkName = 'navMenuLink';
    if (isActive) linkName += ' active';

    return (
        <li className={'navMenuItem'}>
            <p className={linkName} onClick={onClick}>
                {title}
            </p>
        </li>
    );
}

export default NavMenu;

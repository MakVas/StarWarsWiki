import './Footer.css';

interface FooterProps {
    onClick: (route: string) => void;
}

function Footer({ onClick }: FooterProps) {
    return (
        <footer className={'footer'}>
            <ul className={'footer__menu'}>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('home')}
                    >
                        Home
                    </p>
                </li>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('films')}
                    >
                        Films
                    </p>
                </li>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('people')}
                    >
                        People
                    </p>
                </li>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('planets')}
                    >
                        Planets
                    </p>
                </li>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('vehicles')}
                    >
                        Vehicles
                    </p>
                </li>
                <li className={'footer__menu-item'}>
                    <p
                        className={'footer__menu-link'}
                        onClick={() => onClick('starships')}
                    >
                        Starships
                    </p>
                </li>
            </ul>
            <p>&copy; Makovii Andrii. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;

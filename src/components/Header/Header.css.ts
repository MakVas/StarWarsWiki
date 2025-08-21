import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.outlinePrimary};
`;

const HeaderImage = styled.img`
    margin: 20px auto 20px auto;
    cursor: pointer;
`;

const NavBar = styled.ul`
    position: sticky;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
        margin: 8px;
        font-weight: 500;
        font-style: normal;
        text-transform: uppercase;
        display: block;
        color: rgba(255, 255, 255, 0.5);

        &:hover {
            cursor: pointer;
            color: rgba(255, 255, 255, 1);
        }
    }

    a {
        text-decoration: none;

        &.active {
            li {
                color: white;
            }
            text-shadow:
                0 0 4px white,
                0 0 8px white,
                0 0 10px blue,
                0 0 20px blue;
            transition: text-shadow 0.2s;
        }
    }
`;

export { StyledHeader, HeaderImage, NavBar };

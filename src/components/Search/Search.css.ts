import styled from 'styled-components';

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    input {
        flex: 1;
        height: 30px;
        padding-left: ${({ theme }) => theme.spacing.small};
        padding-right: ${({ theme }) => theme.spacing.small};
        border-radius: 0 16px 16px 0;
        outline: none;
        border: none;
        font-size: large;
        font-family: inherit;
        box-shadow:
            0 0 4px white,
            0 0 8px white,
            0 0 10px blue,
            0 0 20px blue;
        transition: box-shadow 0.2s;

        &:focus {
            box-shadow:
                0 0 4px white,
                0 0 8px white,
                0 0 10px blue,
                0 0 20px blue,
                0 0 30px blue,
                0 0 40px blue;
        }
    }
`;

const Hilt = styled.img`
    height: 50px;
    -webkit-user-drag: none;
    user-select: none;
`;

export { SearchBar, Hilt };

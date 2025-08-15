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

export { StyledHeader, HeaderImage };

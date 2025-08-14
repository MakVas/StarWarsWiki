import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;

const HeaderImage = styled.img`
    margin: 20px auto 0 auto;
    cursor: pointer;
`;

export { StyledHeader, HeaderImage };

import styled from 'styled-components';

const StyledFooter = styled.footer`
    margin-top: auto;
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.outlinePrimary};
`;

export { StyledFooter };

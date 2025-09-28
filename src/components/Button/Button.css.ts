import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.secondary};
    background: none;
    padding: 16px 32px;
    border-radius: 32px;
    border: 5px solid ${({ theme }) => theme.colors.secondary};
    font-size: 16px;

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.secondary};
        transition: all 0.2s;
    }
`;

export { StyledButton };

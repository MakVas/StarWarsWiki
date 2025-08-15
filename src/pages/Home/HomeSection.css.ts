import styled from 'styled-components';

const WelcomeText = styled.div`
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.medium};

    h1 {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: ${({ theme }) => theme.typography.fontSize.large};
        line-height: 1;
        margin: 0;
    }

    span {
        color: ${({ theme }) => theme.colors.textSecondary};
    }

    p {
        font-size: ${({ theme }) => theme.typography.fontSize.small};
        line-height: 1;
    }
`;

const Quote = styled.div`
    max-width: 1000px;
    margin: 32px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.typography.fontSize.medium};
        font-weight: bold;
        font-style: italic;
        line-height: 1;
        margin: 0;
    }

    p {
        align-self: flex-end;
        font-size: ${({ theme }) => theme.typography.fontSize.small};
        margin: 0;
    }
`;

export { WelcomeText, Quote };

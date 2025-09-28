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
    width: 100%;
    border-radius: 32px;
    border: 5px solid ${({ theme }) => theme.colors.secondary};
    max-width: 1000px;
    margin: 32px auto 0 auto;
    padding: ${({ theme }) => theme.spacing.medium};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow:
        0 0 4px ${({ theme }) => theme.colors.secondary},
        0 0 8px ${({ theme }) => theme.colors.secondary};

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

const Meme = styled.div`
    margin-top: ${({ theme }) => theme.spacing.extraLarge};
    width: 100%;
    max-width: 1000px;

    h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.typography.fontSize.medium};
        color: ${({ theme }) => theme.colors.secondary};
        margin: ${({ theme }) => theme.spacing.small};
    }

    img {
        width: 100%;
        border-radius: 32px;
        border: 5px solid ${({ theme }) => theme.colors.secondary};
        box-shadow:
            0 0 4px ${({ theme }) => theme.colors.secondary},
            0 0 8px ${({ theme }) => theme.colors.secondary};
    }
`;

export { WelcomeText, Quote, Meme };

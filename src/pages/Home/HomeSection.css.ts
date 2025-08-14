import styled from 'styled-components';

const WelcomeText = styled.h1`
    color: #ffe81f;
    font-size: 48px;
    text-shadow:
        0 0 6px #ffe81f,
        0 0 40px #ffe81f;
`;

const Title = styled.h2`
    color: #ffe81f;
    font-size: 32px;
`;

const Quote = styled.p`
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    line-height: 0;
`;

const Author = styled.p`
    font-size: 16px;
`;

export { WelcomeText, Title, Quote, Author };

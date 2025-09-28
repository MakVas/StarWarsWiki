import styled from 'styled-components';

const ImageContainer = styled.div`
    margin: 32px 0;
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 700px;

    img {
        width: 100%;
        border-radius: 32px;
        border: 5px solid ${({ theme }) => theme.colors.secondary};
        box-shadow:
            0 0 4px ${({ theme }) => theme.colors.secondary},
            0 0 8px ${({ theme }) => theme.colors.secondary};
    }

    h2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export { ImageContainer };

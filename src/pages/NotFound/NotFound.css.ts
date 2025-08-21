import styled from 'styled-components';

const ImageContainer = styled.div`
    position: relative;
    display: inline-block;

    img {
        max-width: 700px;
        display: block;
        margin: 0 auto;
    }

    h2 {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export { ImageContainer };

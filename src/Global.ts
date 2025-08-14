import { createGlobalStyle } from 'styled-components';

import bgStars from './assets/background-stars.jpg';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
   
    * {
        box-sizing: border-box;
    }

    :root {
        color: ${({ theme }) => theme.colors.textPrimary};
        background-image: url(${bgStars});
        background-repeat: repeat;
        background-attachment: fixed;
        font-family: "Poppins", sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }

    main{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1500px;
        margin: 0 auto;
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export default GlobalStyles;

import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: '#000',
        textPrimary: '#fff',
        textSecondary: '#ffe81f',
        outlinePrimary: 'rgba(255, 255, 255, 0.25)',
    },

    spacing: {
        extraSmall: '8px',
        small: '16px',
        medium: '32px',
        large: '64px',
        extraLarge: '128px',
    },

    typography: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: {
            small: '32px',
            medium: '48px',
            large: '64px',
        },
    },
};

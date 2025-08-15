import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            textPrimary: string;
            textSecondary: string;
            outlinePrimary: string;
        };

        spacing: {
            extraSmall: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };

        typography: {
            fontFamily: string;
            fontSize: {
                small: string;
                medium: string;
                large: string;
            };
        };
    }
}

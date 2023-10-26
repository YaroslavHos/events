interface IPalette {
    dark600: string;
    main500: string;
    medium400: string;
    medium300: string;
    light200: string;
    light100: string;
    extraLight50: string;
}

interface IGrayPalette {
    extraDark900: string;
    extraDark800: string;
    dark700: string;
    dark600: string;
    main500: string;
    medium400: string;
    medium300: string;
    light200: string;
    light100: string;
    extraLight50: string;
}
export interface INewTheme {
    colors: {
        dark: IPalette,
        light: IPalette,
        error: IPalette,
        warning: IPalette,
        success: IPalette,
        neutralGray: IGrayPalette,
        background: {
            white: string,
            dark: string,
            extraLightGrey: string,
        },
        text: {
            headline: string,
            secondary: string,
            disabled: string,
            tint: string,
        };
        contrast: {
            white: string,
            black: string,
        };
    };
    font: string,
}
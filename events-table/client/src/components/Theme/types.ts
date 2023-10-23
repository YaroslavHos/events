interface IPalette {
    dark600: string;
    main500: string;
    medium400: string;
    medium300: string;
    light200: string;
    light100: string;
    extraLight50: string;
}
export interface IBackground {
    background: string
}
export interface ITheme {
    color: {
        dark: IBackground,
        light: IBackground
    }

    // colors: {
    //     primary: IPalette;
    //     secondary: IPalette;
    //     error: IPalette;
    //     warning: IPalette;
    //     success: IPalette;
    //     background: {
    //         white: string;
    //         extraLightGrey: string;
    //     },
    // }
}
import React, {useState} from 'react';

interface IPalette {
    dark600: string;
    main500: string;
    medium400: string;
    medium300: string;
    light200: string;
    light100: string;
    extraLight50: string;
}
export interface IThemePalette {
    extraDark900: string;
    extraDark800: string;
    dark700: string;
    text600: string;
    main500: string;
    medium400: string;
    medium300: string;
    light200: string;
    light100: string;

    headline: string,
    text: string,
    disabled: string,
    tint: string,
    bgExtraLightGrey: string,
    bgColor: string,
    bgColor2: string;
}
export interface ICustomTheme {
    colors: {
        light: IThemePalette,
        dark: IThemePalette,
        error: IPalette,
        success: IPalette,
        warning: IPalette,
        contrast: {
            white: string,
            black: string,
        };
    }
}
export const themes: ICustomTheme = {
    colors: {
        light: {
            extraDark900: '#101828',
            extraDark800: '#1D2939',
            dark700: '#344054',
            text600: '#475467',
            main500: '#667085',
            medium400: '#98A2B3',
            medium300: '#D0D5DD',
            light200: '#E4E7EC',
            light100: '#F2F4F7',
            headline: '#101828',
            text: '#475467',
            disabled: '#D0D5DD',
            tint: '#98A2B3',
            bgExtraLightGrey: '#F9FAFB',
            bgColor: '#eeeeee',
            bgColor2: '#F9FAFB',
        },
        dark: {
            extraDark900: '#101828',
            extraDark800: '#1D2939',
            dark700: '#344054',
            text600: '#DDE6ED',
            main500: '#667085',
            medium400: '#98A2B3',
            medium300: '#D0D5DD',
            light200: '#E4E7EC',
            light100: '#F2F4F7',
            headline: '#fff',
            text: '#475467',
            disabled: '#D0D5DD',
            tint: '#98A2B3',
            bgExtraLightGrey: '#F9FAFB',
            bgColor: '#27374D',
            bgColor2: '#526D82',
        },
        error: {
            dark600: '#BF2600',
            main500: '#DE350B',
            medium400: '#FF4830',
            medium300: '#FF7452',
            light200: '#FF8F73',
            light100: '#FFBDAD',
            extraLight50: '#FFEBE6',
        },
        success: {
            dark600: '#006644',
            main500: '#00875A',
            medium400: '#36A176',
            medium300: '#57D9A3',
            light200: '#79F2C0',
            light100: '#ABF5D1',
            extraLight50: '#E3FCEF',
        },
        warning: {
            dark600: '#FF8B00',
            main500: '#FF991F',
            medium400: '#FFAB00',
            medium300: '#FFC400',
            light200: '#FFE380',
            light100: '#FFF0B3',
            extraLight50: '#FFFAE6',
        },
        contrast: {
            white: '#FFFFFF',
            black: '#000000',
        },
    }
};
type ContextType = {
    theme: IThemePalette;
    toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
    theme: themes.colors.dark,
    toggleTheme: () => {},
});

const ThemeProvider: React.FC = ({children}: React.PropsWithChildren<{}>) => {
    const [theme, setTheme] = useState(themes.colors.dark);

    const toggleTheme = (): void => {
        const val = theme === themes.colors.light ? themes.colors.dark : themes.colors.light;
        setTheme(val);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
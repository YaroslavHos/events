import React, {useState} from 'react';

export interface IPalette {
    bgColor: string,
}
export interface ICustomTheme {
    colors: {
        light: IPalette,
        dark: IPalette
    }
}
export const themes: ICustomTheme = {
    colors: {
        light: {
            //foreground: '#000000',
            bgColor: '#eeeeee',
        },
        dark: {
            //foreground: '#ffffff',
            bgColor: '#222222',
        },
    }
};
type ContextType = {
    theme: IPalette;
    toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
    theme: themes.colors.light,
    toggleTheme: () => {},
});

const ThemeProvider: React.FC = ({children}: React.PropsWithChildren<{}>) => {
    const [theme, setTheme] = useState(themes.colors.light);

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
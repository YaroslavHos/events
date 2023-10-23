import React, {useState} from 'react';

export const themes = {
        light: {
            //foreground: '#000000',
            background: '#eeeeee',
        },
        dark: {
            //foreground: '#ffffff',
            background: '#222222',
        },

};

export const ThemeContext = React.createContext( {
        theme: themes,
        toggleTheme: () => {},
    }
);

// export const ThemeNew = (props: any) => {
//     const {children} = props
//     const [theme, setTheme] = useState("dark");
//     function toggleTheme() {
//         setTheme(theme === "light" ? "dark" : "light");
//     }
//     const providerValue = {
//         theme: themes[theme],
//         toggleTheme,
//     };
//     return (<div>{children}</div>)
// }
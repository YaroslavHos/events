import React, {useState} from 'react';
import {ITheme} from "./types";
import {DefaultTheme} from "react-jss";

// export const themes = {
//         light: {
//             //foreground: '#000000',
//             bgColor: '#eeeeee',
//         },
//         dark: {
//             //foreground: '#ffffff',
//             bgColor: '#222222',
//         },
//
// };
type ContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
    theme: "dark",
    toggleTheme: () => {},
});

// export const ThemeContext = React.createContext<ITheme>( {
//         theme: themes.dark,
//         toggleTheme: () => {},
//     }
// );

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

//import { ThemeContext } from "../context/ThemeContext";
// interface IThemeProvider {
//     theme: DefaultTheme
//     children: React.ReactNode
// }

const ThemeProvider: React.FC = ({children}: React.PropsWithChildren<{}>) => {
    //const { children } = props
    const [theme, setTheme] = useState<"light" | "dark">(
        (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
    );

    const toggleTheme = (): void => {
        const val = theme === "light" ? "dark" : "light";
        setTheme(val);
        localStorage.setItem("ui.theme", val);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
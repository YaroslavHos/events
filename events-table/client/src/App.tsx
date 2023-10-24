import React, {useState} from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import ThemeProvider, {ThemeContext} from "./components/Theme";

function App() {
    // const [themeColor, setThemeColor] = useState("dark");
    // const [theme, setTheme] = useState<"light" | "dark">(
    //     (localStorage.getItem("ui.theme") as "light" | "dark") || "dark"
    // );
    // const toggleTheme = (): void => {
    //     const val = theme === "light" ? "dark" : "light";
    //     setTheme(val);
    //     localStorage.setItem("ui.theme", val);
    // };
    // function toggleTheme() {
    //     setThemeColor(themeColor === "light" ? "dark" : "light");
    // }
    // const providerValue = {
    //     theme: theme,
    //     toggleTheme,
    // };
  return (
      <ThemeProvider>
      <EventsPage/>
      </ThemeProvider>
  );
}

export default App;

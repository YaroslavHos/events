import React, {useState} from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import {ThemeContext, themes} from "./components/Theme";

function App() {
    const [themeColor, setThemeColor] = useState("dark");
    function toggleTheme() {
        setThemeColor(themeColor === "light" ? "dark" : "light");
    }
    const providerValue = {
        theme: themes[themeColor],
        toggleTheme,
    };
  return (
      <ThemeContext.Provider value={providerValue}>
      <EventsPage/>
      </ThemeContext.Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import ThemeProvider from "./components/Theme";

function App() {
  return (
      <ThemeProvider>
      <EventsPage/>
      </ThemeProvider>
  );
}

export default App;

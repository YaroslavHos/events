import React from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import {Link, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/something '>Another Page</Link></li>
          </ul>
        </nav>
      <Routes>
      <Route path='/' element={<EventsPage/>} />
      <Route path='*' element={<NotFound/>} />
      </Routes>
      </>
  );
}

export default App;

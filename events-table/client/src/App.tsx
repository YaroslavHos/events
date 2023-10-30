import React from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Ignored from "./pages/Ignored";
import EventsLayout from "./components/Menu/EventsLayout";
import Event from "./components/Event";
import Reported from "./pages/Reported";
import {useSelector} from "react-redux";
import {IRootState} from "./store/types";

function App() {
    const eventsList = useSelector((state: IRootState) => state?.events);
    console.log(eventsList.data, 'eventsList in app')
  return (
      <>
          <Menu />
      <Routes>
          <Route path='/' element={<EventsPage/>} />
          <Route path='/events' element={<EventsLayout data={eventsList}/>} >
            <Route path='ignored' element={<Ignored/>} />
            <Route path='reported' element={<Reported/>} />
            {/*<Route path=':id' element={<Event/>} />*/}
          </Route>
          <Route path='*' element={<NotFound/>} />
      </Routes>
      </>
  );
}

export default App;

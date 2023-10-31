import React from 'react';
import './App.css';
import EventsPage from "./components/EventsPage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Ignored, {LoadEvents} from "./pages/Ignored";
import EventsLayout from "./components/Menu/EventsLayout";
import Reported from "./pages/Reported";
import {useSelector} from "react-redux";
import {IRootState} from "./store/types";

function App() {
    const eventsList = useSelector((state: IRootState) => state?.events);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Menu/>}>
                <Route index element={<EventsPage />}/>
                <Route path='/events' element={<EventsLayout data={eventsList}/>}>
                    <Route path='ignored' element={<Ignored/>} loader={LoadEvents}/>
                    <Route path='reported' element={<Reported/>}/>
                    {/*<Route path=':id' element={<Event/>} />*/}
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        )
    );
    return (
        <RouterProvider router={router}/>
    )
}

export default App;

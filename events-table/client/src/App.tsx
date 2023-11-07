import React, {useContext} from 'react';
import EventsPage from "./components/EventsPage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Ignored, {LoadEvents} from "./pages/Ignored";
import EventsLayout from "./components/Menu/EventsLayout";
import Reported from "./pages/Reported";
import EventPage from "./pages/SingleEvent";
import {ThemeContext} from "./components/Theme";

function App() {
    const theme = useContext(ThemeContext);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Menu/>}>
                <Route index element={<EventsPage />}/>
                <Route path='/events' element={<EventsLayout data={theme}/>}>
                    <Route path='ignored' element={<Ignored/>} loader={LoadEvents}/>
                    <Route path='reported' element={<Reported/>} loader={LoadEvents}/>
                    <Route path=':id' element={<EventPage/>}/>
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

import React, {useContext} from 'react'
import EventsPage from "./components/EventsPage"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import NotFound from "./pages/NotFound"
import Menu from "./components/Menu"
import EventsLayout from "./components/Menu/EventsLayout"
import EventPage from "./pages/SingleEvent"
import {ThemeContext} from "./components/Theme"
import AllEventsPage from "./pages/AllEvents"

function App() {
    const theme = useContext(ThemeContext)
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Menu/>}>
                <Route index element={<EventsPage/>}/>
                <Route path='/events' element={<EventsLayout data={theme}/>}>
                    <Route index element={<AllEventsPage/>}/>
                    <Route path=':id' element={<EventPage/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        )
    )
    return (
        <RouterProvider router={router}/>
    )
}

export default App

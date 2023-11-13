import React from "react"
import {Link, Outlet} from "react-router-dom"

const Menu = () => {
    return (
        <>
        <h1>Menu</h1>
            <Link to='/' reloadDocument>Home</Link>
            <br/>
            <Link to='/something'>Another Page</Link>
            <br/>
            <Link to='/events'>events</Link>
            <br/>
            <Outlet/>
        </>
    )
}

export default Menu
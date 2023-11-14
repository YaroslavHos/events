import React from "react"
import {Link, Outlet} from "react-router-dom"

const EventsLayout = (props: any) => {
    const {data} = props
    return (<>
            <br/>
            {/*<Link to='/events/:id'>One Event</Link>*/}
            <Outlet context={{data: data}}/>
        </>
    )
}

export default EventsLayout
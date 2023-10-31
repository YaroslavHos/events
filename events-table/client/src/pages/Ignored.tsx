import React from "react";
import {useLoaderData} from "react-router-dom";
import Event from "../components/Event";
import axios from "axios";

const Ignored = () => {

    const outlet = useLoaderData();
    return (<div >

        {outlet && outlet.map((item, index) => {
            if(item.ignored)  return <Event key={index} {...item}/>
        })}
    </div>)
}
export default Ignored;

export function LoadEvents() {
    return axios.get("http://localhost:3001/events").then((response) => {
        return response.data
    })
}



import React from "react";
import {useOutletContext} from "react-router-dom";

const Reported = () => {
    const {data} = useOutletContext();
    return (<div>
        reported events list (in development)
        {data}
    </div>)
}
export default Reported;
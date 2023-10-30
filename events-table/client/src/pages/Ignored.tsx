import React, {useContext} from "react";
import {useOutletContext} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootState} from "../store/types";
import Event from "../components/Event";

const Ignored = () => {
    const eventsList = useSelector((state: IRootState) => state?.events);
    const outlet = useOutletContext();
    console.log(outlet.data.data, 'eventsList.data')
    return (<div >

        {outlet?.data.data && outlet.data.data.map((item, index) => {
            if(item.ignored)  return <Event key={index} {...item}/>
        })}
    </div>)
}
export default Ignored;
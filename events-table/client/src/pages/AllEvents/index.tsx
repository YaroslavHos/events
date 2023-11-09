import React, {useEffect, useState} from 'react';
import Search from "../../components/Search";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/types";
import {fetchEventsAction} from "../../store/events/actions/fetchData";
import Event from "../../components/Event";
import {useLoaderData} from "react-router-dom";
import {IEvent} from "../../store/events/types";

const AllEventsPage = () => {
    const dispatch = useDispatch()
    const eventsList = useSelector((state: IRootState) => state?.events);
    const [searchRes, setSearchRes] = useState([])
    const result = searchRes.map((item, index) => <Event key={index} {...item}/>)
    const content = result?.length ? result : <p>Not found</p>
    useEffect(() => {
        dispatch<any>(fetchEventsAction());
        setSearchRes(eventsList?.data)
    }, [])

    if (eventsList?.isLoading !== false) return 'Data loading'
    return (
        <>
            <Search events={eventsList?.data} setSearchRes={setSearchRes}/>
            <div>{content}</div>
        </>
    );
};

export default AllEventsPage;
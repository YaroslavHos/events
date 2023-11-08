import React, {useEffect} from "react";
import SingleEvent from "./SingleEvent";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/types";
import {fetchOneEventAction} from "../../store/events/actions/fetchData";

const EventPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const events = useSelector((state: IRootState) => state.events);

    useEffect(() => {
        console.log('fetch one')
        dispatch<any>(fetchOneEventAction({id: id}));
    }, [])

    return (<>
        { events.isLoading === false && <SingleEvent data={events.data}/> }
    </>)
}
export default EventPage;
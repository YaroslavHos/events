import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneEventAction} from "../store/events/actions/fetchData";
import {IRootState} from "../store/types";

const SingleEvent = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const event = useSelector((state: IRootState) => state?.events);
    useEffect(() => {
        dispatch<any>(fetchOneEventAction({id: id}));
    }, [])
    console.log(event, 'single event data')
    return (<div>Single event page</div>)
}

export default SingleEvent;
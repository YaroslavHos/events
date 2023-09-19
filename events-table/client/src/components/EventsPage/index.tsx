import React, {useEffect, useState} from "react";
import EventForm from "../EventForm";
import EventsTable from "../EventsTable";
import Axios from 'axios';
import useStyles from './styles'
import { useSelector, useDispatch } from 'react-redux';
import eventsReducer from "../../store/events/reducers";
import {fetchDataRequest, getEventById} from "../../store/events/actions";
import {fetchEventsAction} from "../../store/events/actions/fetchData";
import store from "../../store";
import event from "../Event";
import {IRootState} from "../../store/types";
import moment from "moment";
//import {getEventsInfo, getEventsState} from "../../store/selectors";
//import {fetchEvents} from '../actions/fetchData';

const ws = new WebSocket("ws://localhost:3001/ws")

const EventsPage = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const eventsList = useSelector((state: IRootState) => state?.events);
    console.log(eventsList?.isLoading, 'data')
    // if(eventsList?.isLoading) {
    //     dispatch<any>(fetchEventsAction())
    // }
    React.useEffect(() => {
        dispatch<any>(fetchEventsAction())
    }, [])

    // const [eventsList, setEventsList] = useState<any[]>([]);
    // ws.onopen = () => {
    //     console.log('We are connected')
    //     ws.send('Hello server')
    // }
    //
    // ws.onmessage = (msg) => {
    //
    // }
    // ws.onerror = (msg) => {
    //     console.log(msg)
    // }
    // ws.onclose = () => {
    //     console.log('webSocket closed')
    // }
    // const sendMessage = () => {
    //     //ws.send('Hello from client 2')
    // }
    //
    //
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/events").then((response) => {
    //         setEventsList(response.data)
    //     })
    // }, [])
    //let diff = moment("20321125", "YYYYMMDD").fromNow();
    //let diff = moment("20321125", "YYYYMMDD").endOf('day')
    //console.log(diff, 'diff')


    const endDate = moment().startOf('day')
    const diff = moment('20321125').diff(endDate, 'days')

    return (<div>
        <div className={classes.countDown}>{diff}</div>
        <EventForm/>
        <EventsTable list={eventsList?.data} />
        {/*<button onClick={sendMessage}>testBTN</button>*/}
    </div>)
}

export default EventsPage;
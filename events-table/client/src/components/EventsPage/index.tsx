import React, {useContext, useEffect, useState} from "react";
import EventForm from "../EventForm";
import EventsTable from "../EventsTable";
import useStyles from './styles'
import { useSelector, useDispatch } from 'react-redux';
import {fetchEventsAction} from "../../store/events/actions/fetchData";
import {IRootState} from "../../store/types";
import moment from "moment";
import {Box, Button, Modal} from "@mui/material";
import { ThemeContext } from "../Theme";
//const ws = new WebSocket("ws://localhost:3001/ws")

const EventsPage = () => {
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext);
    const classes = useStyles(theme);
    const eventsList = useSelector((state: IRootState) => state?.events);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    useEffect(() => {
        dispatch<any>(fetchEventsAction());
    }, [])
    const loading = eventsList?.isLoading;
    if (loading || loading === undefined) return 'Data loading'

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


    const endDate = moment().startOf('day')
    const diff = moment('20321125').diff(endDate, 'days')

    return (<div className={classes.pageContainer}>
        <button onClick={theme.toggleTheme}>
            Toggle Theme
        </button>
        <Button sx={{ m: 1 }} onClick={handleOpen} variant="outlined">
            Add Event
        </Button>
        <div className={classes.countDown}>{diff}</div>
        <Modal open={open} onClose={handleOpen}>
            <Box className={classes.modalBox}>
                <EventForm />
            </Box>
        </Modal>
        {eventsList?.data && <EventsTable list={eventsList.data} />}
    </div>)
}

export default EventsPage;
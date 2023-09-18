import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import {ISingleEvent} from "../../store/events/types";
import Switch from "@mui/material/Switch";
import {Box, FormControlLabel, Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateDataAction} from "../../store/events/actions/fetchData";
// export interface IEventData {
//     name: string,
//     severity: string,
//     timestamp: number,
//     id: number,
//     ignored: boolean,
//     reported: boolean
// }

// export interface IEvent {
//     //event: IEventData
//     name: string,
//     severity: string,
//     timestamp: number,
//     id: number,
//     ignored: boolean,
//     reported: boolean
// }

const Event: React.FC<ISingleEvent> = (props) => {
    const { name, id, ignored, reported, timestamp, severity } = props;
    const [ignoredEvent, setIgnoredEvent] = useState(ignored)
    const [reportedEvent, setReportedEvent] = useState(reported)
    const dispatch = useDispatch();
    const classes = useStyles()



    //const [someData, setSomeData] = useState<any>()
    // const openConnection = (e:React.BaseSyntheticEvent) => {
    //     const ws = new WebSocket("ws://localhost:3001/ws");
    //     const id = e.target.id
    //     ws.onopen = () => {
    //         console.log('We are connected')
    //         ws.send(id)
    //     }
    //
    //     ws.onmessage = (msg) => {
    //
    //     }
    //     ws.onerror = (msg) => {
    //         console.log(msg)
    //     }
    // }
    // const ignoreEvent = (e: React.BaseSyntheticEvent) => {
    //     setIgnoredEvent(!ignoredEvent)
    //     Axios.put('http://localhost:3001/ignored/'+id, {
    //         ignored: !ignoredEvent,
    //     }).then(() => {
    //         console.log('successful insert');
    //     })
    // }
    const ignoreEvent = (e: React.BaseSyntheticEvent) => {
        setIgnoredEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: id, ignored: !ignoredEvent}))
    }
    const reportEvent = (e: React.BaseSyntheticEvent) => {
        setReportedEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: id, reported: !reportedEvent}))
    }
    const sendMessage = (e: React.BaseSyntheticEvent) => {
        const id = e.target.id
        //ws.send(id)
    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <div className={classes.eventContainer}>
                        <div className={classes.eventLine}>{name}</div>
                        <div className={classes.eventLine}><span>Severity - </span>{severity}</div>
                        <div className={classes.eventLine}><span>ID - </span>{id}</div>
                        <div className={classes.eventLine}><span>Timestamp - </span>{timestamp}</div>
                        <div className={classes.eventLine}><span>Ignored - </span>{ignored}</div>
                        <div className={classes.eventLine}><span>Reported - </span>{reported}</div>
                        <div className={classes.actionBtns}>
                            <FormControlLabel
                                control={<Switch size='small' onChange={ignoreEvent} checked={Boolean(ignoredEvent)}/>}
                                label="Ignore"
                            />
                            <FormControlLabel
                                control={<Switch size='small' onChange={reportEvent} checked={Boolean(reportedEvent)}/>}
                                label="Report"
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Event;
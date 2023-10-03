import React, {useEffect, useState} from "react";
import useStyles from "./styles";
import {ISingleEvent} from "../../store/events/types";
import Switch from "@mui/material/Switch";
import {Box, Button, FormControlLabel, Grid, Modal} from "@mui/material";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import {useDispatch} from "react-redux";
import {deleteDataAction, ignoreReportDataAction, updateDataAction} from "../../store/events/actions/fetchData";
import Typography from "@mui/material/Typography";
import EventForm from "../EventForm";
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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Event: React.FC<ISingleEvent> = (props) => {
    const { name, id, ignored, reported, timestamp, severity } = props;
    const [ignoredEvent, setIgnoredEvent] = useState(ignored)
    const [reportedEvent, setReportedEvent] = useState(reported)
    const dispatch = useDispatch();
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
        dispatch<any>(ignoreReportDataAction({id: id, ignored: !ignoredEvent}))
    }
    const reportEvent = (e: React.BaseSyntheticEvent) => {
        setReportedEvent(e.target.checked)
        dispatch<any>(ignoreReportDataAction({id: id, reported: !reportedEvent}))
    }
    const deleteEvent = (e: React.BaseSyntheticEvent) => {
        dispatch<any>(deleteDataAction({id: id}))
    }
    const updateEvent = (e: React.BaseSyntheticEvent) => {
        console.log(e)
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
                        <div className={classes.eventButtonsContainer}>
                            <Stack spacing={2} direction="row" justifyContent="flex-end">
                                <div>
                                    <Button
                                        variant="outlined"
                                        color="warning"
                                        startIcon={<CreateIcon />}
                                        onClick={handleOpen}
                                    >Modify</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <EventForm />
                                        </Box>
                                    </Modal>
                                </div>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={deleteEvent}
                                >Delete</Button>
                            </Stack>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Event;
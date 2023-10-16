import React, {useState} from "react";
import useStyles from "./styles";
import {ISingleEvent} from "../../store/events/types";
import Switch from "@mui/material/Switch";
import {Box, FormControlLabel, Grid, IconButton, Modal} from "@mui/material";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import {useDispatch} from "react-redux";
import {deleteDataAction, updateDataAction} from "../../store/events/actions/fetchData";
import EventForm from "../EventForm";

const Event: React.FC<ISingleEvent> = (props) => {
    const { name, _id, ignored, reported, timestamp, severity, description } = props;
    const [ignoredEvent, setIgnoredEvent] = useState(ignored)
    const [reportedEvent, setReportedEvent] = useState(reported)
    const dispatch = useDispatch();
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [openNew, setOpenNew] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenNew = () => setOpenNew(true);
    const handleClose = () => setOpen(false);
    const handleCloseNew = () => setOpenNew(false);

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

    const ignoreEvent = (e: React.BaseSyntheticEvent) => {
        setIgnoredEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: _id, ignored: !ignoredEvent}))
    }
    const reportEvent = (e: React.BaseSyntheticEvent) => {
        setReportedEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: _id, reported: !reportedEvent}))
    }
    const deleteEvent = () => {
        dispatch<any>(deleteDataAction({id: _id}))
    }

    return (
        <Grid item xs={10}>
            <div className={classes.eventContainer}>
                        <div className={classes.eventTitle}>{name}</div>
                        <div className={classes.eventLine}><span>Severity - </span>{severity}</div>
                        <div className={classes.eventLine}><span>Timestamp - </span>{timestamp}</div>
                        <div className={classes.eventLine}><div className={classes.eventDescription}><span>Description - </span>{description}</div></div>
                        <div className={classes.eventLine}><span>Ignored - </span>{ignored ? 'true' : 'false'}</div>
                        <div className={classes.eventLine}><span>Reported - </span>{reported ? 'true' : 'false'}</div>
                        <div className={classes.eventButtonsContainer}>
                            <Stack spacing={2} direction="row" justifyContent="flex-end">
                                <FormControlLabel
                                    control={<Switch size='small' onChange={ignoreEvent} checked={Boolean(ignoredEvent)}/>}
                                    label="Ignore"
                                />
                                <FormControlLabel
                                    control={<Switch size='small' onChange={reportEvent} checked={Boolean(reportedEvent)}/>}
                                    label="Report"
                                />
                                <div>
                                    <IconButton
                                        aria-label="update"
                                        color="warning"
                                        onClick={handleOpen}
                                    >
                                        <CreateIcon />
                                    </IconButton>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box className={classes.modalBox}>
                                            <EventForm additionalData={_id} actionType='update'/>
                                        </Box>
                                    </Modal>
                                </div>
                                <div>
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                        onClick={handleOpenNew}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <Modal
                                        open={openNew}
                                        onClose={handleCloseNew}
                                    >
                                        <Box className={classes.modalBox}>
                                            <span>Are you sure?</span>
                                                <IconButton
                                                    aria-label="delete"
                                                    color="error"
                                                    onClick={deleteEvent}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                        </Box>
                                    </Modal>
                                </div>
                            </Stack>
                        </div>
                    </div>
        </Grid>
    )
}

export default Event;
import React, {useEffect} from "react";
import {Link, useOutletContext, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneEventAction} from "../../store/events/actions/fetchData";
import {IRootState} from "../../store/types";
import Stack from "@mui/material/Stack";
import {Box, Button, FormControlLabel, Grid, IconButton, Modal} from "@mui/material";
import Switch from "@mui/material/Switch";
import CreateIcon from "@mui/icons-material/Create";
import EventForm from "../../components/EventForm";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "../../components/Event/styles";
import useEvent from "../../components/Event/hooks";

const SingleEvent = () => {
    const {id} = useParams();
    const outlet = useOutletContext()
    const dispatch = useDispatch();
    const event = useSelector((state: IRootState) => state?.events?.data);
    const {ignoredEvent,
        reportedEvent,
        openUpdate,
        openDel,
        handleOpenUpdate,
        handleOpenDel,
        handleCloseUpdate,
        handleCloseDel,
        ignoreEvent,
        reportEvent,
        deleteEvent} = useEvent(event)
    const classes = useStyles(outlet.theme);

    const {name, severity, description, ignored, reported, timestamp} = event || {};

    useEffect(() => {
        dispatch<any>(fetchOneEventAction({id: id}));
    }, [])
    if (!event) return (<h1>Loading data...</h1>);

    return (<Grid item xs={10}>
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
                            onClick={handleOpenUpdate}
                        >
                            <CreateIcon />
                        </IconButton>
                        <Modal
                            open={openUpdate}
                            onClose={handleCloseUpdate}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className={classes.modalBox}>
                                <EventForm additionalData={id} actionType='update'/>
                            </Box>
                        </Modal>
                    </div>
                    <div>
                        <IconButton
                            aria-label="delete"
                            color="error"
                            onClick={handleOpenDel}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Modal
                            open={openDel}
                            onClose={handleCloseDel}
                        >
                            <Box className={classes.modalBox}>
                                <span>Are you sure?</span>
                                <Button color="error" onClick={deleteEvent}>Yes</Button>
                                <Button color="success" onClick={handleCloseDel}>No</Button>
                            </Box>
                        </Modal>
                    </div>
                    <Link to={`/events/${id}`}>
                        <IconButton
                            aria-label="go-to"
                            color="success"
                        >
                            <CreateIcon/>
                        </IconButton>
                    </Link>
                </Stack>
            </div>
        </div>
    </Grid>)
}

export default SingleEvent;
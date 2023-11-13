import React from "react"
import {Link, useOutletContext} from "react-router-dom"
import Stack from "@mui/material/Stack"
import {Box, Button, FormControlLabel, Grid, IconButton, Modal} from "@mui/material"
import Switch from "@mui/material/Switch"
import CreateIcon from "@mui/icons-material/Create"
import EventForm from "../../components/EventForm"
import DeleteIcon from "@mui/icons-material/Delete"
import useStyles from "../../components/Event/styles"
import useEvent from "../../components/Event/hooks"

const SingleEvent = (props) => {
    const {_id, name, severity, description, ignored, reported, timestamp} = props.data
    const outlet = useOutletContext()
    const classes = useStyles(outlet.theme)

    const {ignoredEvent,
        reportedEvent,
        openUpdate,
        openDel,
        handleOpenUpdate,
        handleOpenDel,
        ignoreEvent,
        reportEvent,
        deleteEvent} = useEvent(props.data)

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
                            onClose={handleOpenUpdate}
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
                            onClick={handleOpenDel}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Modal
                            open={openDel}
                            onClose={handleOpenDel}
                        >
                            <Box className={classes.modalBox}>
                                <span>Are you sure?</span>
                                <Button color="error" onClick={deleteEvent}>Yes</Button>
                                <Button color="success" onClick={handleOpenDel}>No</Button>
                            </Box>
                        </Modal>
                    </div>
                    <Link to={`/events/${_id}`}>
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

export default SingleEvent
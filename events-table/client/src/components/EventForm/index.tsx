import React, {useState} from "react";
import Axios from 'axios';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";

const EventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventSeverity, setEventSeverity] = useState('');
    const timestamp = new Date().getTime() / 1000;

    const submitEvent = () => {
        Axios.post("http://localhost:3001/insert", {
            eventName: eventName,
            eventSeverity: eventSeverity,
            timestamp: timestamp,
        }).then(() => {
            alert('successful insert');
        })
    }
    // const setEventName = (e: React.BaseSyntheticEvent) => {
    //
    // }
    return (
        <div className="form">
            <form onSubmit={submitEvent}>
            <FormControl>
                <FormLabel id="event-name">Event name</FormLabel>
                <TextField
                    type="text"
                    aria-labelledby="event-name"
                    label="Event name"
                    variant="outlined"
                    name="eventName"
                    onChange={(e) => setEventName(e.target.value)}
                />
                <FormLabel id="severity">Severity</FormLabel>
                <RadioGroup
                    aria-labelledby="severity"
                    defaultValue="High"
                    name="eventSeverity"
                >
                    <FormControlLabel value="High" control={<Radio />} label="High" />
                    <FormControlLabel value="Mid" control={<Radio />} label="Mid" />
                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                </RadioGroup>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Submit
                </Button>
            </FormControl>
            </form>
            {/*<label>Event name:</label>*/}
            {/*<input type="text" name="eventName" onChange={(e) => setEventName(e.target.value)}/>*/}
            {/*<label>Event severity:</label>*/}
            {/*<input type="text" name="eventSeverity" onChange={(e) => setEventSeverity(e.target.value)}/>*/}
            {/*<button onClick={submitEvent}>Submit</button>*/}
        </div>
    )
}

export default EventForm;
import React, {useState} from "react";
import Axios from 'axios';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";

const EventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventSeverity, setEventSeverity] = useState('High');
    const [error, setError] = React.useState(false);
    const timestamp = new Date().getTime() / 1000;

    const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(eventName, eventSeverity, 'test')
        Axios.post("http://localhost:3001/insert", {
            eventName: eventName,
            eventSeverity: eventSeverity,
            timestamp: timestamp,
        }).then(() => {
            alert('successful insert');
        })
    }
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEventSeverity((event.target as HTMLInputElement).value);
        setError(false);
    };

    return (
        <div className="form">
            <form onSubmit={submitEvent}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
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
                    onChange={handleRadioChange}
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
        </div>
    )
}

export default EventForm;
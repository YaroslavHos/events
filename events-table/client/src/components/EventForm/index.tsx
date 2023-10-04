import React, {useState} from "react";
import Axios from 'axios';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {createEventAction, updateDataAction} from "../../store/events/actions/fetchData";
import {useDispatch} from "react-redux";
import useStyles from "./styles";

interface IEventForm {
    actionType?: string,
    additionalData?: any
}

const EventForm: React.FC<IEventForm> = (props) => {
    const {actionType = 'insert', additionalData} = props
    const [eventName, setEventName] = useState('');
    const [eventSeverity, setEventSeverity] = useState('High');
    const [description, setDescription] = useState('');
    const [error, setError] = React.useState(false);
    const timestamp = new Date().getTime() / 1000;
    const dispatch = useDispatch();
    const classes = useStyles()

    const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {name: eventName, severity: eventSeverity, timestamp: timestamp, description: description  }
        if (actionType === 'insert') {
            dispatch<any>(createEventAction(data))
        } else {
            dispatch<any>(updateDataAction({id: additionalData, ...data}))
        }


        //console.log(eventName, eventSeverity, 'test')
        // Axios.post(`http://localhost:3001/${actionType}`, {
        //     eventName: eventName,
        //     eventSeverity: eventSeverity,
        //     timestamp: timestamp,
        // }).then(() => {
        //     alert('successful insert');
        // })
    }
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEventSeverity((event.target as HTMLInputElement).value);
        setError(false);
    };

    return (
        <div className="form">
            <form onSubmit={submitEvent} className={classes.form}>
            <FormControl sx={{ m: 2 }} error={error} variant="standard" fullWidth>
                <TextField
                    type="text"
                    aria-labelledby="event-name"
                    label="Event name"
                    variant="outlined"
                    name="eventName"
                    onChange={(e) => setEventName(e.target.value)}
                />
                <TextField
                    className={classes.textArea}
                    multiline={true}
                    minRows={4}
                    type="text"
                    aria-labelledby="event-description"
                    label="Event description"
                    variant="outlined"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
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
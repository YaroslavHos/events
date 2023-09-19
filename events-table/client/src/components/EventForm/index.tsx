import React, {useState} from "react";
import Axios from 'axios';

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

    return (
        <div className="form">
            <label>Event name:</label>
            <input type="text" name="eventName" onChange={(e) => setEventName(e.target.value)}/>
            <label>Event severity:</label>
            <input type="text" name="eventSeverity" onChange={(e) => setEventSeverity(e.target.value)}/>
            <button onClick={submitEvent}>Submit</button>
        </div>
    )
}

export default EventForm;
import React, {useState} from "react";
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
    const [formValues, setFormValues] = useState({})
    const [severity, setSeverity] = useState('High')
    const [error, setError] = React.useState(false);
    const dispatch = useDispatch();
    const classes = useStyles()

    const submitEvent = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const timestamp = new Date().getTime() / 1000;
        let data = formValues
        if (actionType === 'insert') {
            dispatch<any>(createEventAction({...data, timestamp: timestamp}))
        } else {
            dispatch<any>(updateDataAction({id: additionalData, ...data}))
        }
    }

    const onChangeWrapper = (e: React.BaseSyntheticEvent) => {
        const { value, name } = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeverity((e.target as HTMLInputElement).value)
        const { name, checked, value } = e.target;
        checked && setFormValues({...formValues, [name]: value});
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
                    name="name"
                    defaultValue={''}
                    onChange={onChangeWrapper}
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
                    defaultValue={''}
                    onChange={onChangeWrapper}
                />
                <FormLabel id="severity">Severity</FormLabel>
                <RadioGroup
                    aria-labelledby="severity"
                    defaultValue="High"
                    value={severity}
                    name="severity"
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
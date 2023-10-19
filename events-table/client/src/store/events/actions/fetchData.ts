import axios from "axios";
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataError,
    deleteDataRequest,
    deleteDataRequestSuccess,
    deleteDataRequestError,
    updateDataRequest,
    updateDataRequestSuccess,
    updateDataRequestError,
    insertEventRequest,
    insertEventSuccess, insertEventError,
} from "./index";
const ROOT_URL = 'http://localhost:3001';

export const fetchEventsAction = () => {
    const data = 'events'
    const url = `${ROOT_URL}/${data}`;
        return (dispatch: any) => {
            dispatch(fetchDataRequest());
            axios
                .get(
                    url
                )
                .then((response: any) => {
                    dispatch(fetchDataSuccess(response.data));
                })
                .catch((error: any) => {
                    dispatch(fetchDataError(error.message));
                });
        };
}

export const createEventAction = (action: any) => {
    const {name, severity, timestamp, description} = action;
    const url = `${ROOT_URL}/insert`;
    return (dispatch: any) => {
        dispatch(insertEventRequest(action))
        axios.post(url, {
            name: name,
            severity: severity,
            timestamp: timestamp,
            description: description
        }).then((response: any) => {
            dispatch(insertEventSuccess(response.data));
        }).catch((error: any) => {
            dispatch(insertEventError(error.message));
        });
    }
}

export const deleteDataAction = (action: any) => {
    const {id} = action;
    const url = `${ROOT_URL}/delete/${id}`;

    return (dispatch: any) => {
        dispatch(deleteDataRequest(action))
            axios.delete(url)
                .then((response: any) => {
                    dispatch(deleteDataRequestSuccess(response.data));
                }).catch((error: any) => {
                    dispatch(deleteDataRequestError(error.message))
            })
    }
}

export const updateDataAction = (action: any) => {
    const {id, name, severity, timestamp, description, ignored, reported} = action;
    const url = `${ROOT_URL}/update/${id}`;

    return (dispatch: any) => {
        dispatch(updateDataRequest(action))
        axios.put(url, {
            name: name,
            severity: severity,
            timestamp: timestamp,
            description: description,
            ignored: ignored,
            reported: reported
        }).then((response: any) => {
            dispatch(updateDataRequestSuccess(response.data));
        }).catch((error: any) => {
            dispatch(updateDataRequestError(error.message));
        });
    }
}
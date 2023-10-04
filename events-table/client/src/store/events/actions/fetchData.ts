import axios from "axios";
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataError,
    ignoreReportEventRequest,
    ignoreReportEventSuccess,
    ignoreReportEventError,
    deleteDataRequest,
    deleteDataRequestSuccess,
    deleteDataRequestError,
    updateDataRequest,
    updateDataRequestSuccess,
    updateDataRequestError,
    insertEventRequest,
    insertEventSuccess, insertEventError,
} from "./index";
import Axios from "axios";
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
                    dispatch(fetchDataError(error));
                });
        };
}

export const createEventAction = (action: any) => {
    const {name, severity, timestamp} = action;
    const url = `${ROOT_URL}/insert`;
    return (dispatch: any) => {
        dispatch(insertEventRequest(action))
        axios.post(url, {
            eventName: name,
            eventSeverity: severity,
            timestamp: timestamp,
        }).then((response: any) => {
            dispatch(insertEventSuccess(response.data));
        }).catch((error: any) => {
            dispatch(insertEventError(error));
        });
    }
    // Axios.post(url, {
    //     eventName: name,
    //     eventSeverity: severity,
    //     timestamp: timestamp,
    // }).then(() => {
    //     alert('successful insert');
    // })
}

export const ignoreReportDataAction = (action: any) => {
    const {id, ignored, reported} = action;
    let path = ignored !== undefined ? 'ignored' : 'reported'
    let val = ignored !== undefined ? ignored : reported
    const url = `${ROOT_URL}/${path}/${id}`;

    return (dispatch: any) => {
        dispatch(ignoreReportEventRequest(action))
            axios.put(url, {
                [path]: val,
            }).then((response: any) => {
                dispatch(ignoreReportEventSuccess(response.data));
            }).catch((error: any) => {
                dispatch(ignoreReportEventError(error));
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
                    dispatch(deleteDataRequestError(error))
            })
    }
}

export const updateDataAction = (action: any) => {
    const {id, name, severity, timestamp} = action;
    const url = `${ROOT_URL}/update/${id}`;

    return (dispatch: any) => {
        dispatch(updateDataRequest(action))
        axios.put(url, {
            eventName: name,
            eventSeverity: severity,
            timestamp: timestamp,
        }).then((response: any) => {
            dispatch(updateDataRequestSuccess(response.data));
        }).catch((error: any) => {
            dispatch(updateDataRequestError(error));
        });
    }
}
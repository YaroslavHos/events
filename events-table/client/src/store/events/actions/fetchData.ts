import axios from "axios";
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataError,
    ignoreReportEventRequest,
    ignoreReportEventSuccess,
    ignoreReportEventError
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
                    dispatch(fetchDataError(error));
                });
        };
}

export const updateDataAction = (action: any) => {
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
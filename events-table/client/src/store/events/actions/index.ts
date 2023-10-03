import {eventsActionTypes} from "./types";
export const ignoreReportEventRequest = (data: any) => {
    return {
        type: eventsActionTypes.IGNORE_REPORT_EVENT_REQUEST,
        payload: data
    }
}
export const ignoreReportEventSuccess = (data: any) => {
    return {
        type: eventsActionTypes.IGNORE_REPORT_EVENT_SUCCESS,
        payload: data
    }
}
export const ignoreReportEventError = (error: string) => {
    return {
        type: eventsActionTypes.IGNORE_REPORT_EVENT_ERROR,
        payload: error
    }
}
export const getEventById = (data: any) => {
    return {
        type: 'GET_EVENTS_BY_ID',
        payload: data
    }
}
export const fetchDataRequest = () =>    {
    return {
        type: eventsActionTypes.FETCH_DATA_REQUEST
    };
}
export const fetchDataSuccess = (data: any) => {
    return {
        type: eventsActionTypes.FETCH_DATA_SUCCESS,
        payload: data
    };
}

export const fetchDataError = (error: string) => {
    return {
        type: eventsActionTypes.FETCH_DATA_ERROR,
        payload: error
    };
}

export const deleteDataRequest = (data: any) => {
    return {
        type: eventsActionTypes.DELETE_DATA_REQUEST,
        payload: data
    };
}

export const deleteDataRequestSuccess = (data: any) => {
    return {
        type: eventsActionTypes.DELETE_DATA_REQUEST_SUCCESS,
        payload: data
    };
}

export const deleteDataRequestError = (error: string) => {
    return {
        type: eventsActionTypes.DELETE_DATA_REQUEST_ERROR,
        payload: error
    };
}

export const updateDataRequest = (data: any) => {
    return {
        type: eventsActionTypes.UPDATE_DATA_REQUEST,
        payload: data
    };
}

export const updateDataRequestSuccess = (data: any) => {
    return {
        type: eventsActionTypes.UPDATE_DATA_REQUEST_SUCCESS,
        payload: data
    };
}

export const updateDataRequestError = (error: string) => {
    return {
        type: eventsActionTypes.UPDATE_DATA_REQUEST_ERROR,
        payload: error
    };
}

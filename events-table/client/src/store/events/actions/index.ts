import {eventsActionTypes} from "./types";
export const insertEventRequest = (data: any) => {
    return {
        type: eventsActionTypes.INSERT_EVENT_REQUEST,
        payload: data
    }
}
export const insertEventSuccess = (data: any) => {
    return {
        type: eventsActionTypes.INSERT_EVENT_SUCCESS,
        payload: data
    }
}
export const insertEventError = (error: string) => {
    return {
        type: eventsActionTypes.INSERT_EVENT_ERROR,
        payload: error
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

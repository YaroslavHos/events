import {eventsActionTypes} from "../actions/types";
import {IEventsListState} from "../types";
// const initialState: any = {
//     isLoading: false,
//     error: '',
//     data: [],
// };

const eventsReducer = (state: IEventsListState = {} as IEventsListState, action: any) => {
    switch (action.type) {
        case eventsActionTypes.FETCH_DATA_REQUEST:
            return { ...state, isLoading: true };
        case eventsActionTypes.FETCH_DATA_SUCCESS:
            return { ...state, isLoading: false, data: action.payload};
        case eventsActionTypes.FETCH_DATA_ERROR:
            return { ...state, isLoading: false, error: action.payload}
        case eventsActionTypes.IGNORE_REPORT_EVENT_REQUEST:
            return { ...state, isLoading: true };
        case eventsActionTypes.IGNORE_REPORT_EVENT_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case eventsActionTypes.IGNORE_REPORT_EVENT_ERROR:
            return { ...state, isLoading: false, error: action.payload};
        case eventsActionTypes.DELETE_DATA_REQUEST:
            return { ...state, isLoading: true };
        case eventsActionTypes.DELETE_DATA_REQUEST_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case eventsActionTypes.DELETE_DATA_REQUEST_ERROR:
            return { ...state, isLoading: false, error: action.payload};
        case eventsActionTypes.UPDATE_DATA_REQUEST:
            return { ...state, isLoading: true };
        case eventsActionTypes.UPDATE_DATA_REQUEST_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case eventsActionTypes.UPDATE_DATA_REQUEST_ERROR:
            return { ...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
}

export default eventsReducer;
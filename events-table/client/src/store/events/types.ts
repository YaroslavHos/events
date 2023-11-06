export interface IEventsListState {
    data: any,
    isLoading: boolean,
    error: string
}
export interface IEvent {
    _id: string,
    name: string,
    severity: string,
    ignored?: boolean,
    reported?: boolean,
    timestamp: number,
    description?: string
}

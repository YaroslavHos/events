export interface IEventsListState {
    data: ISingleEvent[],
    isLoading: boolean
}
export interface ISingleEvent {
    _id: string,
    name: string,
    severity: string,
    ignored?: boolean,
    reported?: boolean,
    timestamp: number,
    description?: string
}

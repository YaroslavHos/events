export interface IEventsListState {
    data: ISingleEvent[],
    isLoading: boolean
}
export interface ISingleEvent {
    name: string,
    id: number,
    severity: string,
    ignored: boolean,
    reported: boolean,
    timestamp: number
}

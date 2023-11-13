import React, {useState} from "react"
import {IEvent} from "../../store/events/types"
import {useDispatch} from "react-redux"
import {deleteDataAction, updateDataAction} from "../../store/events/actions/fetchData"

const useEvent = (props:  IEvent) => {
    const { _id, ignored, reported } = props
    const dispatch = useDispatch()

    const [ignoredEvent, setIgnoredEvent] = useState(ignored)
    const [reportedEvent, setReportedEvent] = useState(reported)

    const [openUpdate, setOpenUpdate] = React.useState(false)
    const [openDel, setOpenDel] = React.useState(false)

    const handleOpenUpdate = () => setOpenUpdate(!openUpdate)
    const handleOpenDel = () => setOpenDel(!openDel)

    const ignoreEvent = (e: React.BaseSyntheticEvent) => {
        setIgnoredEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: _id, ignored: !ignoredEvent}))
    }
    const reportEvent = (e: React.BaseSyntheticEvent) => {
        setReportedEvent(e.target.checked)
        dispatch<any>(updateDataAction({id: _id, reported: !reportedEvent}))
    }
    const deleteEvent = () => {
        dispatch<any>(deleteDataAction({id: _id}))
        setOpenDel(false)
    }

    return {
        ignoredEvent,
        reportedEvent,
        openUpdate,
        openDel,
        handleOpenUpdate,
        handleOpenDel,
        ignoreEvent,
        reportEvent,
        deleteEvent
    }
}

export default useEvent
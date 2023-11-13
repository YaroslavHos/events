import React, {useEffect, useState} from 'react'
import Search from "../../components/Search"
import {useDispatch, useSelector} from "react-redux"
import {IRootState} from "../../store/types"
import {fetchEventsAction} from "../../store/events/actions/fetchData"
import Event from "../../components/Event"

const AllEventsPage = () => {
    const dispatch = useDispatch()
    const eventsList = useSelector((state: IRootState) => state?.events)
    const [searchRes, setSearchRes] = useState([])

    useEffect(() => {
        dispatch<any>(fetchEventsAction())
    }, [])

    if (eventsList?.isLoading !== false) return 'Data loading'
    //let result = []
    const result = (searchRes?.length ? searchRes : eventsList.data).map((item, index) => <Event key={index} {...item}/>)
    //console.log(test, 'test')
    // if (searchRes?.length) {
    //     result = searchRes.map((item, index) => <Event key={index} {...item}/>)
    // } else result = eventsList.data.map((item, index) => <Event key={index} {...item}/>)
    const content = result?.length ? result : <p>Not found</p>

    return (
        <>
            <Search events={eventsList?.data} setSearchRes={setSearchRes}/>
            <div>{content}</div>
        </>
    );
};

export default AllEventsPage
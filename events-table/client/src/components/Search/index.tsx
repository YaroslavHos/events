import React from 'react';
import {IEvent} from "../../store/events/types";

interface ISearch {
    events: IEvent[],
    setSearchRes: any
}

const SearchIndex = (props: ISearch) => {
    const {events, setSearchRes} = props
    const handleSubmit = (e: React.BaseSyntheticEvent) => e.preventDefault()
    const handleSearchChange = (e: React.BaseSyntheticEvent) => {
        if (!e.target.value) return setSearchRes(events)
        const resArr = events.filter(event => event.name.includes(e.target.value) ||
            event.description?.includes(e.target.value))
        setSearchRes(resArr)
    }
    return (<header>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleSearchChange}/>
            <button>Button</button>
        </form>
    </header>)
}

export default SearchIndex;
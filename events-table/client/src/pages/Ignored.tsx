import React from "react"
import {useLoaderData} from "react-router-dom"
import Event from "../components/Event"
import axios from "axios"
import {Box, Grid} from "@mui/material"

const Ignored = () => {
    const outlet = useLoaderData()

    return (<Box sx={{ width: '100%' }}>
        <Grid container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center">
            {outlet && outlet.map((item, index) => {
                return item.ignored && <Event key={index} {...item}/>
            })}
        </Grid>
    </Box>)
}
export default Ignored

export function LoadEvents() {
    return axios.get("http://localhost:3001/events").then((response) => {
        return response.data
    })
}



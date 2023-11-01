import React from "react";
import {useLoaderData} from "react-router-dom";
import Event from "../components/Event";
import {Box, Grid} from "@mui/material";

const Reported = () => {
    const outlet = useLoaderData();

    return (<Box sx={{ width: '100%' }}>
        <Grid container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center">
            {outlet && outlet.map((item, index) => {
                return item.reported && <Event key={index} {...item}/>
            })}
        </Grid>
    </Box>)
}
export default Reported;



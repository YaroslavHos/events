import React, {useState} from "react";
import useStyles from "./styles";
import Event from "../Event";
import {ISingleEvent} from "../../store/events/types";
import CustomTabPanel from "../Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

interface IEventsTable {
    list: ISingleEvent[]
}
const EventsTable: React.FC<IEventsTable> = (props) => {
    const {list = []} = props;
    // const [ignored, setIgnored] = useState(0)
    // const [reported, setReported] = useState(0)
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const irData = (arr: any, param: string) => {
        return arr.reduce((sum: number, item: any) => item[param] ? sum+1 : sum, 0)
    }
    const ignored = irData(list, 'ignored')
    const reported = irData(list, 'reported')
    const classes = useStyles();
    return ( <div data-testid='table-testId' className={classes.tableContainer}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Base"/>
                        <Tab label={`Ignored - ${ignored}`}/>
                        <Tab label={`Reported - ${reported}`}/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                        {list.map((item, index) => {
                            if (item.reported) return <Event key={index} {...item}/>
                        })}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        {list.map((item, index) => {
                            if (item.ignored) return <Event key={index} {...item}/>
                        })}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        {list.map((item, index) => {
                            if (!item.ignored && !item.reported) return <Event key={index} {...item}/>
                        })}
                    </Grid>
                </CustomTabPanel>
            </Box>
        </div>
    )
}
export default EventsTable
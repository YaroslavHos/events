import React, {useContext, useState} from "react";
import useStyles from "./styles";
import Event from "../Event";
import {ISingleEvent} from "../../store/events/types";
import CustomTabPanel from "../Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import {Theme, ThemeOptions, useTheme} from "@mui/material/styles";
import {ThemeContext} from "../Theme";
import {ITheme} from "../Theme/types";

interface IEventsTable {
    list: ISingleEvent[]
}
const EventsTable: React.FC<IEventsTable> = (props) => {
    const {list} = props;
    const theme = useContext(ThemeContext);
    console.log(theme, 'theme')
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    let mainCount = 0;
    let ignoredCount = 0;
    let reportedCount = 0;
    let mainItems: ISingleEvent[] = [];
    let reportedItems: ISingleEvent[] = [];
    let ignoredItems: ISingleEvent[] = [];
    list.forEach((item, index) => {
        if (!item.ignored && !item.reported) {
            mainItems.push(item);
            mainCount++
        }
        if (item.reported) {
            reportedItems.push(item);
            reportedCount++
        }
        if (item.ignored) {
            ignoredItems.push(item);
            ignoredCount++
        }
    });

    const classes = useStyles(theme);
    return ( <div data-testid='table-testId' className={classes.tableContainer}>
                    {/*<button*/}
                    {/*    onClick={toggleTheme}*/}
                    {/*    style={{backgroundColor: theme.background}}>*/}
                    {/*    Toggle Theme*/}
                    {/*</button>*/}

            <Box sx={{ width: '100%', bgcolor: 'secondary.main' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={`Main - ${mainCount}`}/>
                        <Tab label={`Ignored - ${ignoredCount}`}/>
                        <Tab label={`Reported - ${reportedCount}`}/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                        {reportedItems.map((item, index) => <Event key={index} {...item}/>)}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        {ignoredItems.map((item, index) => <Event key={index} {...item}/>)}
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        {mainItems.map((item, index) => <Event key={index} {...item}/>)}
                    </Grid>
                </CustomTabPanel>
            </Box>
        </div>
    )
}
export default EventsTable;
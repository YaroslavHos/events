import {createUseStyles} from "react-jss";
import {Theme} from '@mui/material/styles';
import {ITheme} from "../Theme/types";

export default createUseStyles( (theme) => ({
    tableContainer: {
        maxWidth: 1400,
        padding: 10,
        margin: '0 auto',
        backgroundColor: theme
    },
    info: {
        display: 'flex',
    }
}))
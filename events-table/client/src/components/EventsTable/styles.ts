import {createUseStyles} from "react-jss";
import {IThemePalette} from "../Theme";

export default createUseStyles( (theme: IThemePalette) => ({
    tableContainer: {
        maxWidth: 1400,
        padding: 10,
        margin: '0 auto',

    },
    tab: {
        color: 'red'
    },
    info: {
        display: 'flex',
    }
}))
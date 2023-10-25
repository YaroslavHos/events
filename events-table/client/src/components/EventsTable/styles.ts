import {createUseStyles} from "react-jss";
import {IPalette} from "../Theme";

export default createUseStyles( (theme: IPalette) => ({
    tableContainer: {
        maxWidth: 1400,
        padding: 10,
        margin: '0 auto',

    },
    info: {
        display: 'flex',
    }
}))
import {createUseStyles} from "react-jss";
import {IThemePalette} from "../Theme";

export default createUseStyles( (theme: IThemePalette) => ({
    countDown: {
        position: 'absolute',
        right: 5,
        top: 5,
        color: 'grey',
        border: '1px solid grey',
        padding: 3,
        width: "min-content"
    },
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        backgroundColor: theme.bgColor,
        borderRadius: 4,
        boxShadow: '0px 6px 10px 4px rgba(102, 112, 133, 0.15), 0px 2px 3px rgba(102, 112, 133, 0.3)',
    },
    pageContainer: {
        backgroundColor: theme.bgColor,
        height: '100vh',
    }
}))
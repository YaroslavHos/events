import {createUseStyles} from "react-jss";
import {IThemePalette} from "../Theme";

export default createUseStyles( (theme: IThemePalette) => ({
    form: {
        display: 'flex',
        justifyContent: 'space-around',
        color: theme.text600,
    },
    textArea: {
        width: '100%',
        color: theme.text600,
    },
    formInput: {
        color: theme.text600
    }
}))
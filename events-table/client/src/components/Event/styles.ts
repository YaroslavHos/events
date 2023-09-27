import {createUseStyles} from "react-jss";

export default createUseStyles( {
    eventContainer: {
        //width: '100%',
        minHeight: 100,
        border: '1px solid grey',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        //justifyContent: 'space-evenly'
    },
    eventLine: {
        width: '100%',
    },
    actionBtns: {
        width: '100%',
        textAlign: 'left',
        padding: '5px 0',
    },
    eventButtonsContainer: {
        width: '100%',
        textAlign: 'right'
    }
})
import {createUseStyles} from "react-jss";

export default createUseStyles( {
    eventContainer: {
        minHeight: 100,
        border: '1px solid grey',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
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
    },
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
})
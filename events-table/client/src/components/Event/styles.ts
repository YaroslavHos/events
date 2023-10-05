import {createUseStyles} from "react-jss";

export default createUseStyles( {
    eventContainer: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: 'rgb(71, 84, 103)',
        borderRadius: 4,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(249, 250, 251)',
        boxShadow: '0px 6px 10px 4px rgba(102, 112, 133, 0.15), 0px 2px 3px rgba(102, 112, 133, 0.3)',
    },
    eventTitle: {
        fontWeight: 500,
        color: 'rgb(16, 24, 40)',
        marginBottom: 4
    },
    eventDescription: {
        boxShadow: '0px 6px 10px 4px rgba(102, 112, 133, 0.15), 0px 2px 3px rgba(102, 112, 133, 0.3)',
        padding: 2,
        borderRadius: 4
    },
    eventLine: {
        fontWeight: 400,
        marginBottom: 2
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 4,
        boxShadow: '0px 6px 10px 4px rgba(102, 112, 133, 0.15), 0px 2px 3px rgba(102, 112, 133, 0.3)',
    }
})
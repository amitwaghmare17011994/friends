import React from 'react'
import { Input, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { GLOBAL_PAPER_HEIGHT } from '../../constants';


const useStyles = makeStyles(() => createStyles({
    root: {
        height: GLOBAL_PAPER_HEIGHT,
        maxHeight: GLOBAL_PAPER_HEIGHT,
        overflowY: 'auto',
        backgroundColor: '#f6f6f6',
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        width: '100%',
        height: '100%'
    },
    button: {
        marginLeft: 20
    }
}));

function ChatBox({ selctedFriendForChat }) {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Paper style={{ width: '100%', height: 50 }}>
                {selctedFriendForChat?.name}
            </Paper>
            <div style={{ flex: 1 }}>

            </div>
            <Paper style={{ width: '100%', height: 60 }}>
                <Input placeholder={"Type your message..."} className={classes.input} />
            </Paper>

        </Paper>

    )
}

export default ChatBox

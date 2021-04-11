import React from 'react'
import { Avatar, Input, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TrheeDotMenu from '../../components/ThreeDotMenu';


const options = [
    'Block',
];

const useStyles = makeStyles(() => createStyles({
    root: {
        height: '100%',
        maxHeight: '100%',
        overflowY: 'auto',
        backgroundColor: '#f6f6f6',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden'

    },
    input: {
        width: '100%',
        height: '100%',
        marginLeft: 10,
        overflowX: 'hidden',
        maxWidth: '90%'
    },
    button: {
        marginLeft: 20
    },
    chatBoxItem: { width: '100%', height: 60 },
    chatBody: {
        flex: 1
    }
}));

function ChatBox({ selctedFriendForChat }) {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Paper className={classes.chatBoxItem}>
                <div style={{ marginLeft: 10, display: 'flex', alignItems: 'center', marginTop: 5 }}>
                    <Avatar />
                    <span style={{ marginLeft: 10, flex: 1 }}>
                        {selctedFriendForChat?.name || selctedFriendForChat?.fullName}
                    </span>
                    <TrheeDotMenu options={options} />
                </div>
            </Paper>
            <div className={classes.chatBody}>
            </div>
            <Paper className={classes.chatBoxItem}>
                <Input disableUnderline placeholder={"Type your message..."} className={classes.input} />
            </Paper>

        </Paper>

    )
}

export default ChatBox

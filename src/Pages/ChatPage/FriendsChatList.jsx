import React from 'react'
import { Avatar, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FIRENDS, GLOBAL_PAPER_HEIGHT } from '../../constants';
import FirendChatListItem from './FirendChatListItem';
import { useGlobalState } from '../../StateContext';

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: 20,
        height: GLOBAL_PAPER_HEIGHT,
        maxHeight: GLOBAL_PAPER_HEIGHT,
        overflowY: 'auto'
    },

}));


function FriendsChatList({ selctedFriendForChat }) {
    const classes = useStyles()
    const [globalState, setGlobalState] = useGlobalState()

    return (
        <Paper className={classes.root}>
            {FIRENDS?.map((friendItem) =>
                <FirendChatListItem selctedFriendForChat={selctedFriendForChat} friendItem={friendItem} key={friendItem.id} onSelect={(selectedFriendItem) => setGlobalState({ selctedFriendForChat: selectedFriendItem })} />
            )}
        </Paper>

    )
}

export default FriendsChatList

import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { GLOBAL_PAPER_HEIGHT } from '../../constants';
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


function FriendsChatList({ selctedFriendForChat, friends = [] }) {
    const classes = useStyles()
    const [globalState, setGlobalState] = useGlobalState()

    return (
        <Paper className={classes.root}>
            {friends?.map((friendItem) =>
                <div id={'friend_' + friendItem.id}>
                    <FirendChatListItem
                        selctedFriendForChat={selctedFriendForChat}
                        friendItem={friendItem} key={friendItem.id}
                        onSelect={(selectedFriendItem) => setGlobalState({ selctedFriendForChat: selectedFriendItem })} />
                </div>
            )}
        </Paper>

    )
}

export default FriendsChatList

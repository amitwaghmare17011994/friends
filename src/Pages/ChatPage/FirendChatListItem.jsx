import React from 'react'
import { Avatar, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    friendItem: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        cursor: 'pointer',
        marginTop: 10
    },
    selected: {
        backgroundColor: '#b66372',
        color: 'white'
    }
}));


function FirendChatListItem({ friendItem, onSelect, selctedFriendForChat }) {
    const classes = useStyles()
    const isSelected = selctedFriendForChat?.id === friendItem.id
    const className = `${classes.friendItem} ${isSelected ? classes.selected : ''}`
    return (
        <Paper onClick={() => onSelect(friendItem)} className={className} >
            <Avatar />
            <span style={{ marginLeft: 10 }}>
                {friendItem.name || friendItem.fullName}
            </span>
        </Paper>
    )
}

export default FirendChatListItem

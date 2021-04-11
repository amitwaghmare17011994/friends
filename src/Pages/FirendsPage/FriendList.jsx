import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FirendListItem from './FirendListItem';
const useStyles = makeStyles(() => createStyles({
    root: {
        padding: 20,
        height: '70vh',
        maxHeight: '70vh',
        overflowY: 'auto'
    },
    button: {
        marginLeft: 20
    }
}));

function FriendList(props) {
    const { friends = [] } = props;
    const classes = useStyles()
    return (
        <Paper elevation={2} className={classes.root}>
            {
                friends.map((friendItem, i) => {
                    return <FirendListItem key={`${friendItem.fullName}${i}`} friendItem={friendItem} />
                })

            }
            { !friends?.length && <center>No Friends Found</center>}

        </Paper>
    )
}

export default FriendList

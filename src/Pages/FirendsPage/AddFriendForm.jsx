import React, { useState } from 'react'
import { Paper, Input, Button, FormControl } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    root: {
        padding: 20
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        marginLeft: 20
    },
    input: {
        flex: 1
    }
}));


function AddFriendForm(props) {
    const [formState, setFormState] = useState({})
    const classes = useStyles()
    const { onAdd } = props;


    const onAddFriend = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (onAdd) {
            onAdd({ ...formState })
            setFormState({ fullName: '' })
        }
    }

    const upateFormState = (obj) => setFormState({ ...formState, ...obj })

    const onChange = (e) => {
        const value = e.target.value
        upateFormState({ fullName: value })
    }

    return (
        <Paper className={classes.root} elevation={2}>
            <form onSubmit={onAddFriend} className={classes.form}>
                <Input className={classes.input} onChange={onChange} placeholder={'Enter Name'} value={formState.fullName || ''} />
                <Button className={classes.button} variant="contained" color="primary" onClick={onAddFriend}  >Add Firend</Button>
            </form>
        </Paper>

    )
}

export default AddFriendForm

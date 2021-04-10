import React, { useState } from 'react'

function AddFriendForm(props) {
    const [error, setError] = useState({})
    const [formState, setFormState] = useState({})
    const { onAdd } = props;
    const onAddFriend = () => {
        if (!formState?.fullName) {
            setError({ ...error, fullName: 'Enter valid full name' })
            return
        }
        if (onAdd) {
            onAdd({...formState})
        }
    }
    const upateFormState = (obj) => setFormState({ ...formState, ...obj })

    const onChange = (e) => {
        const value = e.target.value
        upateFormState({ fullName: value })
        setError({ fullName: value ? '' : error.fullName })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
            <div style={{ marginRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
                <input onChange={onChange} placeholder={'Enter full name of friend'} id={'fullname'} />
                {!!error?.fullName &&
                    <span id={'error'} style={{ color: 'red', fontSize: 12 }}>{error?.fullName}</span>}
            </div>
            <button onClick={onAddFriend} id='add_friend'>Add Firend</button>
        </div>
    )
}

export default AddFriendForm

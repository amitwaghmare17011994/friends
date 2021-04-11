import React, { useState } from 'react'
import { useGlobalState } from '../../StateContext';
import AddFriendForm from './AddFriendForm'
import FriendList from './FriendList'

function FirendsPage() {
    const [globalState, setGlobalState] = useGlobalState()
    const friendList = globalState?.friendList || []

    return (
        <div>
            <div style={{ padding: 40 }}>
                <AddFriendForm onAdd={(friend) => {
                    setGlobalState({
                        friendList: [...friendList,
                        { ...friend, id: friendList.length + 1 }]
                    })
                }} />
                <div style={{ marginTop: 20 }}>
                    <FriendList friends={friendList} />
                </div>

            </div>
        </div>
    )
}

export default FirendsPage

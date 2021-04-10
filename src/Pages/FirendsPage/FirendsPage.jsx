import React, { useState } from 'react'
import AddFriendForm from './AddFriendForm'
import FriendList from './FriendList'

function FirendsPage() {
    const [friendList, setFriendList] = useState([])

    return (
        <div>
            <div style={{ padding: 40 }}>
                <AddFriendForm onAdd={(friend) => { setFriendList([...friendList, friend]) }} />
                <div style={{ marginTop: 20 }}>
                    <FriendList friends={friendList} />
                </div>

            </div>
        </div>
    )
}

export default FirendsPage

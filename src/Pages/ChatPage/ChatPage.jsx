import React, { useEffect, useState } from 'react'
import { FIRENDS } from '../../constants';
import { useGlobalState } from '../../StateContext';
import ChatBox from './ChatBox';
import FriendsChatList from './FriendsChatList';


function ChatPage() {
    const [globalState, setGlobalState] = useGlobalState()
    const [friendList, setFriendList] = useState([])
    useEffect(() => {
        setFriendList(FIRENDS)
        setGlobalState({ selctedFriendForChat: FIRENDS[0] })

    }, [])

    return (
        <div style={{ padding: 40, display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <FriendsChatList friends={friendList} selctedFriendForChat={globalState?.selctedFriendForChat} />
            </div>
            <div style={{ flex: 3, marginLeft: 20 }}>
                <ChatBox selctedFriendForChat={globalState?.selctedFriendForChat} />
            </div>
        </div>
    )
}

export default ChatPage

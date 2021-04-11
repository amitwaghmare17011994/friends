import React from 'react'
import { useGlobalState } from '../../StateContext';
import ChatBox from './ChatBox';
import FriendsChatList from './FriendsChatList';


function ChatPage() {
    const [globalState, setGlobalState] = useGlobalState()

    return (
        <div style={{ padding: 40, display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <FriendsChatList selctedFriendForChat={globalState?.selctedFriendForChat} />
            </div>
            <div style={{ flex: 3, marginLeft: 20 }}>
                <ChatBox selctedFriendForChat={globalState?.selctedFriendForChat} />
            </div>
        </div>
    )
}

export default ChatPage

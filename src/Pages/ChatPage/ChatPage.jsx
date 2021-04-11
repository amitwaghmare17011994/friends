import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { FIRENDS } from '../../constants';
import { useGlobalState } from '../../StateContext';
import ChatBox from './ChatBox';
import FriendsChatList from './FriendsChatList';


function ChatPage() {
    const [globalState, setGlobalState] = useGlobalState()
    const friendList = globalState?.friendList || []
    const history = useHistory()
    const params = useParams()
    useEffect(() => {
        const selectedFriend = params.friendId ? friendList.find((i) => i.id === parseInt(params.friendId)) : friendList[0]
        if (selectedFriend) {
            setGlobalState({ selctedFriendForChat: selectedFriend })
            history.push({ pathname: `/chat/${selectedFriend.id}` })
        }
    }, [])

    useEffect(() => {
        const friend = globalState.selctedFriendForChat
        if (friend) {
            history.push({ pathname: `/chat/${friend.id}` })
        }
    }, [globalState.selctedFriendForChat])

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

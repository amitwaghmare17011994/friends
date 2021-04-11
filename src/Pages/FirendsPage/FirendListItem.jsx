import React, { useState } from 'react'
import Close from '@material-ui/icons/Close';
import ChatIcon from '@material-ui/icons/Chat'

function FirendListItem({ friendItem, onChatClicked }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div onClick={() => setToggle(!toggle)} className={'friend_item'} style={{ backgroundColor: toggle ? 'red' : '', display: "flex" }}>
            <span style={{ flex: 1 }}>
                {friendItem.fullName}
            </span>
            <div style={{ cursor: 'pointer' }} onClick={(e) => {
                e.stopPropagation()
            }}>
                <ChatIcon color={'primary'} style={{ marginRight: 10 }} onClick={() => onChatClicked(friendItem)} />
                <Close color={'secondary'} />
            </div>
        </div>
    )
}

export default FirendListItem

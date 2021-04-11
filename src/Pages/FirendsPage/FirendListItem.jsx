import React, { useState } from 'react'
import Close from '@material-ui/icons/Close';

function FirendListItem({ friendItem }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div onClick={() => setToggle(!toggle)} className={'friend_item'} style={{ backgroundColor: toggle ? 'red' : '', display: "flex" }}>
            <span style={{ flex: 1 }}>
                {friendItem.fullName}
            </span>
            <div style={{ cursor: 'pointer' }} onClick={(e) => {
                e.stopPropagation()
            }}>
                <Close />
            </div>
        </div>
    )
}

export default FirendListItem

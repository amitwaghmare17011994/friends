import React, { useState } from 'react'

function FirendListItem({ friendItem }) {
    const [toggle, setToggle] = useState(false)
    return (
        <div onClick={() => setToggle(!toggle)} className={'friend_item'} style={{ backgroundColor: toggle ? 'red' : '', display: "flex" }}>
            <span style={{ flex: 1 }}>
                {friendItem.fullName}
            </span>
            <span>X</span>
        </div>
    )
}

export default FirendListItem

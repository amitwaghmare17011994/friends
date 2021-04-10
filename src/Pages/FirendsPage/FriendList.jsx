import React from 'react'

function FriendList(props) {
    const { friends = [] } = props;
    return (
        <>
            {
                friends.map((friendItem) => {
                    return <div key={friendItem.fullName} className={'friend_item'}>{friendItem.fullName}</div>
                })
            }

        </>
    )
}

export default FriendList

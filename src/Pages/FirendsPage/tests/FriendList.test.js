import { create } from 'react-test-renderer';
import FriendList from "../FriendList"

describe('FriendList tests', () => {
    function getRoot(props = {}) {
        return create(<FriendList {...props} />).root

    }

    it('render firend list', () => {
        const root = create(<FriendList />)
        expect(root.toJSON()).toMatchSnapshot();
    })

    it('render 2 items with className friendItem', () => {
        const friends = [{ fullName: 'amit' }, { fullName: 'sumit' }]
        const root = getRoot({friends})

        const allFreindItems = root.findAllByProps({ className: 'friend_item' })
        expect(allFreindItems.length).toBe(friends.length)
    })
 
})
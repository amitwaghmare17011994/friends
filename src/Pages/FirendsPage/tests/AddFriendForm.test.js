import { create, act } from 'react-test-renderer';
import AddFriendForm from '../AddFriendForm';

describe('Add Friend Form', () => {
    function getRoot(props = {}) {
        return create(<AddFriendForm {...props} />).root

    }
    it('should render form component', () => {
        const root = create(<AddFriendForm />)
        expect(root.toJSON()).toMatchSnapshot();

    })

    it('should have name field', () => {
        const root = getRoot()
        expect(root.findByType('input')).toBeTruthy()

    })

    it('should have add button', () => {
        const root = getRoot()
        expect(root.findByType('button')).toBeTruthy()
    })
    it('should show error enter valid name after click on add', () => {
        const root = getRoot()
        const addButton = root.findByType('button')
        act(() => addButton.props.onClick())
        const errorElement = root.findByProps({ id: 'error' })
        expect(errorElement).toBeTruthy()
    })
    it('on change of full name error should gone', () => {
        const root = getRoot()
        const inputBox = root.findByType('input')
        const addButton = root.findByType('button')
        act(() => addButton.props.onClick())
        act(() => {
            inputBox.props.onChange({ target: { value: 'john' } })
        })
        expect(root.findAllByProps({ id: 'error' }).length).toBe(0)
    })
})
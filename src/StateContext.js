import React, { useContext } from 'react'


const StateContext = React.createContext()

export const useGlobalState = () => {
    const { globalState, setGlobalState } = useContext(StateContext)
    return [globalState, setGlobalState]
}


export default StateContext
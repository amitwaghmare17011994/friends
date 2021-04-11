import React from 'react'
import StateContext from './StateContext'


const StateProvider = (props) => {
    const [globalState, setGlobalState] = React.useState({})
    return <StateContext.Provider value={{ globalState, setGlobalState:(obj)=>setGlobalState({...globalState,...obj}) }}>{props.children}</StateContext.Provider>
}

export default StateProvider
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ChatPage from './Pages/ChatPage/ChatPage';
import FirendsPage from './Pages/FirendsPage/FirendsPage';



const Routes = () => <Router>
    <Switch>
        <Route path="/" exact>
            <FirendsPage />
        </Route>
        <Route path="/chat">
            <ChatPage />
        </Route>
    </Switch>
</Router>

export default Routes
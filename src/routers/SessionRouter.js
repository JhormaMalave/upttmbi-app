import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import SessionFooter from '../components/session/SessionFooter';
import LoginScreen from '../screens/session/LoginScreen';

import '../styles/themes/session.css'

const SessionRouter = () => {
    return (
        <>      
            <div>
                
            </div>
            <main className="main">
                <Switch>
                    <Route path="/login" component={ LoginScreen } />
                </Switch>
            </main>
            <SessionFooter />
        </>

    );
}

export default SessionRouter;
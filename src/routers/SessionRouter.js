import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import SessionFooter from '../components/session/SessionFooter';
import LoginScreen from '../screens/session/LoginScreen';

const SessionRouter = () => {
    return (
        <div className="flex flex-col min-h-screen bg--300 justify-between background-image">      
            <div>
                
            </div>
            <main className="flex justify-center">
                <Switch>
                    <Route path="/login" component={ LoginScreen } />
                </Switch>
            </main>
            <div className="flex justify-end mt-10">
                <SessionFooter />
            </div>
        </div>
    );
}

export default SessionRouter;
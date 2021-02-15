import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthRouter = () => {
    return (
        <div className="flex flex-col min-h-screen bg--300 justify-between background-image">      
            <main className="flex justify-center">
                <Switch>
                    <Route path="/auth/login" component={ LoginScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </main>
        </div>
    );
}

export default AuthRouter;
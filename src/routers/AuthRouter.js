import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const AuthRouter = () => {
    return (
        <div className="flex flex-col min-h-screen bg--300 justify-between background-image">      
            <main className="flex justify-center">
                <Switch>
                    <Route path="/auth/login" component={ LoginScreen } />
                    <Route path="/auth/signup" component={ SignupScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </main>
        </div>
    );
}

export default AuthRouter;
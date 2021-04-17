import React from 'react';
import { useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Alert from '../components/Alert';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const AuthRouter = () => {
    const { alert } = useSelector(state => state.ui);

    return (
        <div className="flex flex-col min-h-screen bg--300 justify-between background-image">
            { alert && <Alert {...alert} /> }
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
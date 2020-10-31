import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import SessionRouter from './SessionRouter';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ SessionRouter } />
            </Switch>
        </Router>
    );
}

export default AppRouter;
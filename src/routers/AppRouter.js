import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import DepartmentRouter from './DepartmentRouter';
import SessionRouter from './SessionRouter';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={ SessionRouter } />
                <Route path="/department" component={ DepartmentRouter } />
            </Switch>
        </Router>
    );
}

export default AppRouter;
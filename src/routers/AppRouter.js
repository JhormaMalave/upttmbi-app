import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import DepartmentRouter from './DepartmentRouter';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={ AuthRouter } />
                <Route path="/department" component={ DepartmentRouter } />
                <Redirect to="/auth" />
            </Switch>
        </Router>
    );
}

export default AppRouter;
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import DepartmentRouter from './DepartmentRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const token = sessionStorage.getItem('token') || '';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(token);
    
    return (
        <Router>
            <Switch>
                <PublicRouter path="/auth" component={ AuthRouter } isLoggedIn={isLoggedIn} />
                <PrivateRouter path="/department" component={ DepartmentRouter } isLoggedIn={isLoggedIn} />
                <Redirect to="/auth" />
            </Switch>
        </Router>
    );
}

export default AppRouter;
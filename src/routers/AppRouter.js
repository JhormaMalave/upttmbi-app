import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';


import DepartmentRouter from './DepartmentRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { login } from '../actions/auth';


const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionStorage.getItem('user')){
            const user = JSON.parse(sessionStorage.getItem('user')) || '';
            dispatch(login(user));
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
        setChecking(false);
    }, [setChecking, setIsLoggedIn, dispatch])

    if(checking) {
        return (
            <h1>Cargando</h1>
        );
    }
    
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
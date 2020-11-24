import React from 'react';
import LoginForm from '../../components/session/LoginForm';


const LoginScreen = () => {
    return (
        <div className="bg-white p-5 md:p-10 max-w-md border-4 rounded-2xl m-2">
            <h1 className="font-bold text-4xl text-center">Iniciar Sesión</h1>
            <LoginForm />
        </div>

    );
}

export default LoginScreen;
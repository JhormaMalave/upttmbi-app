import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import LoginForm from '../../components/auth/LoginForm';


const LoginScreen = ({history}) => {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Logo className="mx-auto h-12 w-auto m-center" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Iniciar sesión
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              o 
              <Link to='/auth/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
                Registrarse
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
}

export default LoginScreen;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import SignupForm from '../../components/auth/SignupForm';

const SignupScreen = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Logo className="mx-auto h-12 w-auto m-center" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Registrarse
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              o 
              <Link to='/auth/login' className="font-medium text-indigo-600 hover:text-indigo-500">
                Iniciar sesión
              </Link>
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;

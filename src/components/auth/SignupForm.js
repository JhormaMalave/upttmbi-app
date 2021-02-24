import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { startSignup } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const SignupForm = () => {
  const dispatch = useDispatch()

  const {form, handleInputChange} = useForm({
    email: 'jhormamalave99@gmail.com',
    password: '123456',
    passwordConfirm: '123456',
  });

  const {email, password, passwordConfirm} = form

  const validateForm = () => {
    if (password.trim().length < 6) {
      Swal.fire(
        'Error',
        'Las contraseña no puede ser menor a 6 caracteres',
        'error',
      );
      return false;
    }
    if (password !== passwordConfirm) {
      Swal.fire(
        'Error',
        'Las contraseñas no coinciden',
        'error',
      );
      return false;
    }
    return true;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(startSignup(email, password, passwordConfirm));
    }
  }

  return (
      <form className="mt-8 space-y-6" onSubmit={handleSignup} >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Usuario</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Correo"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input 
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm" className="sr-only">Confirmar contraseña</label>
          <input 
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Confirmar contraseña"
            value={passwordConfirm}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Registrarse
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
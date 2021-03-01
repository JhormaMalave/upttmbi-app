import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithEmailAndPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const LoginForm = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.ui)

  const handleLogin = (e) => {
      e.preventDefault();
      if (!loading) {
        dispatch(startLoginWithEmailAndPassword(form.email, form.password));
      }
  }
  const {form, handleInputChange} = useForm({
    email: 'jhormamalave@gmail.com',
    password: '123456',
  });

  return (
      <form className="mt-8 space-y-6" onSubmit={handleLogin} >
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
            placeholder="Usuario"
            value={form.email}
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
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Contraseña"
            value={form.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
            Recordarme
          </label>
        </div>
        <div className="text-sm">
          <Link
            to="/auth/password"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={ loading }
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
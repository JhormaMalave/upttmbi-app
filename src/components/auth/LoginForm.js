import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLoginWithEmailAndPassword } from '../../store/actions/auth';
import { useForm } from "react-hook-form";
import FormMessageError from '../FormMessageError';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { loading } = useSelector(state => state.ui)

  const onSubmit = data => {
    console.log(data)
    if (!loading) {
      dispatch(startLoginWithEmailAndPassword(data.email, data.password));
    }
  }
/*
  const handleLogin = (e) => {
      e.preventDefault();
      
  }
  */
  

  return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <input
            id="email-address"
            type="text"
            autoComplete="email"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Usuario"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
          />

          {/* Show message if there is error in the email form */}
          {errors.email && errors.email.type === "required" && (
            <FormMessageError message="Debes de ingresar un correo" />
          )}
          {errors.email && errors.email.type === "pattern" && (
            <FormMessageError message="Debes de ingresar un correo valido" />
          )}
        </div>
        <div>
          <input 
            id="password"
            type="password"
            autoComplete="current-password"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Contraseña"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20 
            })}
          />

          {/* Show message if there is error in the password form */}
          {errors.password && errors.password.type === "required" && (
            <FormMessageError message="Debes de ingresar una contraseña" />
          )}
          {errors.password && errors.password.type === "minLength" && (
            <FormMessageError message="La contraseña debe tener almenos 8 caracteres" />
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <FormMessageError message="La contraseña no debe sobrepasar de 20 caracteres" />
          )}
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
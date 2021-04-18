import React from 'react';
import { useDispatch } from 'react-redux';

import { startSignin } from '../../store/actions/auth';
import { useForm } from "react-hook-form";
import FormMessageError from '../FormMessageError';

const SignupForm = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, setError} = useForm();

  const onSubmit = (data) => {
    // Validate password confirm
    if (data.password !== data.password_confirm){
      setError("password", {
        type: "confirm",
      });
      setError("password_confirm", {
        type: "confirm",
      });
      return;
    }
    dispatch(startSignin({email: data.email, password: data.password}));

  }

  return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <input
            id="email-address"
            type="text"
            className={
              `${errors.hasOwnProperty('email') &&
              'input-form-error'} input-form sm:text-sm`
            }
            placeholder="Correo"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i})}
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
            className={
              `${errors.hasOwnProperty('password') &&
              'input-form-error'} input-form sm:text-sm`
            }
            placeholder="Contraseña"
            {...register("password", { required: true, maxLength: 20 })}
          />

          {/* Show message if there is error in the password form */}
          {errors.password && errors.password.type === "required" && (
            <FormMessageError message="Debes de ingresar un contraseña" />
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <FormMessageError message="La contraseña no debe ser mayor a 20 caracteres" />
          )}
          {errors.password && errors.password.type === "confirm" && (
            <FormMessageError message="Las contraseñas no coinciden" />
          )}
        </div>

        <div>
          <input 
            id="passwordConfirm"
            type="password"
            className=
            {`${errors.hasOwnProperty('password_confirm') &&
            'input-form-error'} input-form sm:text-sm`
          }
          placeholder="Confirmar contraseña"
          {...register("password_confirm", { required: true, maxLength: 20 })}
          />

          {/* Show message if there is error in the password form */}
          {errors.password_confirm && errors.password_confirm.type === "required" && (
            <FormMessageError message="Debes de ingresar un contraseña" />
          )}
          {errors.password_confirm && errors.password_confirm.type === "maxLength" && (
            <FormMessageError message="La contraseña no debe ser mayor a 20 caracteres" />
          )}
          {errors.password_confirm && errors.password_confirm.type === "confirm" && (
            <FormMessageError message="Las contraseñas no coinciden" />
          )}
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
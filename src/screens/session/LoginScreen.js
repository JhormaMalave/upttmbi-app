import React from 'react';
import LoginForm from '../../components/session/LoginForm';


const LoginScreen = ({history}) => {
    return (
<div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto m-center" src="./assets/images/upttmbi.svg" alt="Logo de UPTT Mario Briceño Iragorry" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Ingresar sesión
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        o 
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Registrarse
        </a>
      </p>
    </div>
    <LoginForm history={history} />
  </div>
</div>
    );
}

export default LoginScreen;
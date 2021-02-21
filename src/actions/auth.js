import Swal from "sweetalert2";
import { authURL } from "../rails/railsConfig";
import { types } from "../types/types";

const startLoginWithEmailAndPassword = (email, password) => {
  return (async dispatchEvent => {
    const response = await fetch(`${authURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        }
      })
    });
    const user = await response.json();
    const token = response.headers.get('Authorization');
    if (token){
      sessionStorage.setItem('token', token);
      dispatchEvent(login(user.email));
    } else {
      Swal.fire(
        'No se pudo ingresar',
        'Verificar el correo o la contraseña',
        'error',
      );
    }
  });
}

const login = (email) => ({
  type: types.login,
  payload: {
    email: email,
  }
});

export {startLoginWithEmailAndPassword, login}
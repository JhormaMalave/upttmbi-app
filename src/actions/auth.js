import Swal from "sweetalert2";
import { authURL } from "../rails/railsConfig";
import { types } from "../types/types";

const startLogout = () => {
  return (async dispatchEvent => {
    await sessionStorage.setItem('user', '');
    dispatchEvent(logout());
  })
}

const startSignup = (email, password) => {
  return (async dispatchEvent => {
    const response = await fetch(`${authURL}/signup`, {
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
    })
    dispatchEvent(startLoginWithEmailAndPassword(email, password))
  })
}

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
      await sessionStorage.setItem('user', JSON.stringify({email: user.email, token}));
      dispatchEvent(login(user.email, token));
    } else {
      Swal.fire(
        'No se pudo ingresar',
        'Verificar el correo o la contraseña',
        'error',
      );
    }
  });
}

const logout = () => ({
  type: types.logout,
});

const login = (email, token) => ({
  type: types.login,
  payload: {
    email: email,
    token: token
  }
});

export {
  startSignup,
  startLoginWithEmailAndPassword,
  startLogout,
  login
}
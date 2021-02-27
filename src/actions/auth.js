import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { authURL, clientId, clientSecret } from "../rails/railsConfig";
import { types } from "../types/types";

const startLogout = () => {
  return (async dispatchEvent => {
    const response = await fetch (`${authURL}/revoke`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        token: JSON.parse(sessionStorage.getItem('user')).token
      })
    })
    if (response.status === 200) {
      await sessionStorage.setItem('user', '');
      dispatchEvent(logout());
    }
  });
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
    const response = await fetch(`${authURL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*',
      },
      body: JSON.stringify({
        grant_type: 'password',
        email,
        password,
        client_id: clientId,
        client_secret: clientSecret
      })
    });
    if (response.status === 400) {
      // Optimize this!
      Swal.fire(
        'No se pudo ingresar',
        'Verificar el correo o la contraseña',
        'error',
      );
      return;
    }
    const user = await response.json();
    const userWithToken = {
      email: user.email,
      expiresIn: user.expires_in,
      token: user.access_token
    }
    console.log(userWithToken);
    await sessionStorage.setItem('user', JSON.stringify(userWithToken));
    dispatchEvent(login(userWithToken));
  });
}

const logout = () => ({
  type: types.logout,
});

const login = (user) => ({
  type: types.login,
  payload: user
});

export {
  startSignup,
  startLoginWithEmailAndPassword,
  startLogout,
  login
}
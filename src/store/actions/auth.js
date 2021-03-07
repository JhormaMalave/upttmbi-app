import { authURL, clientId, clientSecret } from "../../rails/railsConfig";
import { types } from "../types/types";
import { setAlert, removeAlert, finishLoading, startLoading } from "./ui";

const startLogout = () => {
  return (async dispatchEvent => {
    const response = await fetch (`${authURL}/oauth/revoke`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*',
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        token: JSON.parse(localStorage.getItem('user')).token
      })
    })
    if (response.status === 200) {
      await localStorage.setItem('user', '');
      dispatchEvent(logout());
    }
  });
}

const startSignup = (email, password) => {
  return (async dispatchEvent => {
    await fetch(`${authURL}/signup`, {
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
    dispatchEvent(startLoading());
    const response = await fetch(`${authURL}/oauth/token`, {
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
      dispatchEvent(setAlert('error', 'Por favor comprueba el correo y la contraseña.'));
      dispatchEvent(finishLoading());
      return;
    }
    const user = await response.json();
    const userWithToken = {
      email: user.email,
      expiresIn: user.expires_in,
      token: user.access_token
    }
    await localStorage.setItem('user', JSON.stringify(userWithToken));
    dispatchEvent(login(userWithToken));
    dispatchEvent(finishLoading());
    dispatchEvent(removeAlert());
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
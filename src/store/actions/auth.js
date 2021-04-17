import { loginFetch } from "../../helpers/authHelper";
import { types } from "../types/types";
import { setAlert  } from "./ui";

const startLoginWithEmailAndPassword = (email, password) => {
  return async (dispatchEvent) => {
    const response = await loginFetch({email, password})
    switch (response.status) {
      case 200:
        const user = await response.json();
        console.log(user)
        await localStorage.setItem('user', JSON.stringify(user));
        dispatchEvent(login(user));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al iniciar sesión, por favor verifique su correo y contraseña'));
        break;
    }
  }
}

const startLogout = () => {
  return async (dispatchEvent) => {
    await localStorage.setItem('user', '');
    dispatchEvent(logout())
  }
}

const logout = () => ({
  type: types.logout,
});

const login = (user) => ({
  type: types.login,
  payload: user
});

export {
  startLoginWithEmailAndPassword,
  startLogout,
  login
}
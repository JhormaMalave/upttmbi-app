import { loginFetch, signinFetch } from "../../helpers/authHelper";
import { types } from "../types/types";
import { setAlert  } from "./ui";

const startSignin = (params = {}) => {
  return async (dispatchEvent) => {
    const response = await signinFetch(params);
    switch (response.status) {
      case 201:
        const user = await response.json();
        dispatchEvent(setAlert('error', `El usuario ${user.email} fue registrado correctamente`))
        break;
      default:
        dispatchEvent(setAlert('error', 'El usuario no pudo ser registrado'));
        break;
    }
  }
}

const startLoginWithEmailAndPassword = (email, password) => {
  return async (dispatchEvent) => {
    const response = await loginFetch({email, password})
    switch (response.status) {
      case 200:
        const user = await response.json();
        await localStorage.setItem('user', JSON.stringify(user));
        dispatchEvent(login(user));
        break;
      case 401:
        dispatchEvent(setAlert('error', 'Hubo un error en el correo o en la contraseña'))
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al iniciar sesión'));
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
  startSignin,
  login
}
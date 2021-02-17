import { authURL, railsConfig } from "../rails/railsConfig";
import { types } from "../types/types";

const startLoginWithEmailAndPassword = (email, password) => {
  return (async dispatchEvent => {
    const response = await fetch(`${authURL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*'
      },
      body: JSON.stringify({
        grant_type: 'password',
        email,
        password,
        client_id: railsConfig.clientId,
        client_secret: railsConfig.clientSecret,
      })
    });
    const user = await response.json()
    console.log(user)
    // Realizar correctamente el login
  });
}

const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
});

export {startLoginWithEmailAndPassword, login}
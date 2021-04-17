import { apiURL as url } from "../rails/railsConfig";


const loginFetch = async (params = {}) => {
  const response = await fetch (`${url}/tokens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
    },
    body:JSON.stringify({
      user: params
    }),
  });

  return response;
}

const signinFetch = async (params = {}) => {
  const response = await fetch (`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
    },
    body:JSON.stringify({
      user: {
        ...params,
        role_id: '1',
      }
    }),
  })

  return response;
}

export { loginFetch, signinFetch }
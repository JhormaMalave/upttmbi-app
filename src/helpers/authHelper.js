import { apiURL as url } from "../rails/railsConfig";

// Sections URL

const getToken = () => {
  return localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;
}

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


export { loginFetch }
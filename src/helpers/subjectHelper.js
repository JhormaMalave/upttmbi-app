import { apiURL } from "../rails/railsConfig";

// Subjects URL
const url = `${apiURL}/curricular_units`;
const token = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;

const getSubjectsFetch = async (params = {}) => {
  const getParams = params && new URLSearchParams(params);
  const urlWithParams = `${url}?${getParams}`;

  const response = await fetch (urlWithParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${token}`
    },
  });

  return response;
}

export { getSubjectsFetch }
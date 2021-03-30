import { apiURL } from "../rails/railsConfig";

// Sections URL
const url = `${apiURL}/sections`;

const getToken = () => {
  return localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;
}

const getSectionsFetch = async (params = {}) => {
  const getParams = params && new URLSearchParams(params);
  const urlWithParams = `${url}?${getParams}`;

  const response = await fetch (urlWithParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${getToken()}`
    },
  });

  return response;
}

const getSectionFetch = async (params = '') => {
  const urlWithParams = `${url}/${params}`;

  const response = await fetch (urlWithParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${getToken()}`
    },
  });
  
  return response;
}

const updatedSectionFetch = async (id, params) => {
  const urlWithId = `${url}/${id}`;
  console.log(params)
  const response = await fetch(urlWithId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(params),
  });

  return response;
}

const postSectionsFetch = async (params = {}) => {
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${getToken()}`
    },
    body:JSON.stringify(params),
  });

  return response;
}

export { getSectionsFetch, getSectionFetch, postSectionsFetch, updatedSectionFetch }
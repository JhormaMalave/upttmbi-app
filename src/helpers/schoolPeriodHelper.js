import { apiURL } from "../rails/railsConfig";

// SchoolPeriod URL
const url = `${apiURL}/school_periods`;

const getToken = () => {
  return localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;
}
const getSchoolPeriodsFetch = async (params = {}) => {
  const getParams = params.state && new URLSearchParams(params);
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

const getSchoolPeriodFetch = async (params = '') => {
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

const updatedSchoolPeriodFetch = async (id, params) => {
  const urlWithId = `${url}/${id}`;

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

const postSchoolPeriodsFetch = async (params = {}) => {
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${getToken()}`
    },
    body:JSON.stringify(params),
  });
  //const school_period = response.json();
  console.log(response)
  if (response.status !== 201){
    return false;
  }
  const schoolPeriod = await response.json();
  return schoolPeriod;
}


export {
  getSchoolPeriodsFetch,
  getSchoolPeriodFetch,
  postSchoolPeriodsFetch,
  updatedSchoolPeriodFetch,
}
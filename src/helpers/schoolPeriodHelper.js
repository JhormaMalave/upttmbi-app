import { apiURL } from "../rails/railsConfig";

const getSchoolPeriodsFetch = async (params = {}) => {
  const token = JSON.parse(localStorage.getItem('user')).token
  const url = `${apiURL}/school_periods?${params.state && new URLSearchParams(params)}`;

  const response = await fetch (url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 401){
    return false;
  }
  const schoolPeriods = await response.json()
  return schoolPeriods;
}

export {
  getSchoolPeriodsFetch
}
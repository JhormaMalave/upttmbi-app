import { apiURL } from "../rails/railsConfig";

const getSchoolPeriodsFetch = async () => {
  const token = JSON.parse(sessionStorage.getItem('user')).token

  const response = await fetch (`${apiURL}/school_periods`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      'Authorization': `Bearer ${token}`
    }
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
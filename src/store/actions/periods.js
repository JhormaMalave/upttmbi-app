import { types } from "../types/types";
import {
  getSchoolPeriodFetch,
  getSchoolPeriodsFetch,
  postSchoolPeriodsFetch
} from "../../helpers/schoolPeriodHelper";
import { setAlert } from "./ui";

const startLoadSchoolPeriods = (params = {}) => {
  return async (dispatchEvent) => {
    const schoolPeriods = await getSchoolPeriodsFetch(params);
    dispatchEvent(loadPeriodSchool(schoolPeriods));
  }
}

const startLoadSchoolPeriod = (params = '') => {
  return async (dispatchEvent) => {
    const response = await getSchoolPeriodFetch(params);
    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'El período no fue encontrado'));
        break;
      case 200:
        const schoolPeriod = await response.json();
        dispatchEvent(activeSchoolPeriod(schoolPeriod));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener el período'));
        break;
    }
  }
}

const startNewSchoolPeriod = (params = {}) => {
  return async (dispatchEvent) => {
    const schoolPeriod = await postSchoolPeriodsFetch(params);
    console.log(schoolPeriod)
    dispatchEvent(activeSchoolPeriod(schoolPeriod))
  }
}

const activeSchoolPeriod = (schoolPeriod) => ({
  type: types.periodSchoolActive,
  payload: schoolPeriod,
})

const removeActiveSchoolPeriod = () => ({
  type: types.periodSchoolRemoveActive,
})

const loadPeriodSchool = (schoolPeriod) => ({
  type: types.periodSchoolLoadAll,
  payload: schoolPeriod
})

export {
  startLoadSchoolPeriods,
  startLoadSchoolPeriod,
  removeActiveSchoolPeriod,
  startNewSchoolPeriod,
}
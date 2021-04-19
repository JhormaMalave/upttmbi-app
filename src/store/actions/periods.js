import { types } from "../types/types";
import {
  getSchoolPeriodFetch,
  getSchoolPeriodsFetch,
  postSchoolPeriodsFetch,
  updatedSchoolPeriodFetch,
} from "../../helpers/schoolPeriodHelper";
import { setAlert } from "./ui";

const startLoadSchoolPeriods = (params = {}) => {
  return async (dispatchEvent) => {
    const response = await getSchoolPeriodsFetch(params);
    switch (response.status) {
      case 200:
        const schoolPeriods = await response.json();
        dispatchEvent(loadPeriodSchool(schoolPeriods));
        console.log(schoolPeriods)
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener los periodos escolares'));
        break;
    }
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

const startUpdatedSchoolPeriod = () => {
  return async (dispatchEvent, getState) => {
    const { active } = getState().schoolPeriod;
    const params = {
      name: active.name,
      start_date: active.start_date,
      end_date: active.end_date,
      state: active.state,
    };
    const response = await updatedSchoolPeriodFetch(active.id, params);
    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'El período no fue encontrado'));
        break;
      case 200:
        const schoolPeriod = await response.json();
        dispatchEvent(activeSchoolPeriod(schoolPeriod));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al actualizar el período'));
        break;
    }
    
  }
}

const startNewSchoolPeriod = () => {
  return async (dispatchEvent, getState) => {
    const { active } = getState().schoolPeriod;
    const params = {
      start_date: active.start_date,
      end_date: active.end_date,
      name: active.name,
      state: active.state,
    }
    const schoolPeriod = await postSchoolPeriodsFetch(params);
    console.log(schoolPeriod)
    dispatchEvent(activeSchoolPeriod(schoolPeriod))
  }
}

const activeSchoolPeriod = (schoolPeriod) => ({
  type: types.periodSchoolActive,
  payload: schoolPeriod,
});

const removeActiveSchoolPeriod = () => ({
  type: types.periodSchoolRemoveActive,
});

const loadPeriodSchool = (schoolPeriod) => ({
  type: types.periodSchoolLoadAll,
  payload: schoolPeriod
});

export {
  startLoadSchoolPeriods,
  startLoadSchoolPeriod,
  startNewSchoolPeriod,
  startUpdatedSchoolPeriod,
  removeActiveSchoolPeriod,
  activeSchoolPeriod,
}
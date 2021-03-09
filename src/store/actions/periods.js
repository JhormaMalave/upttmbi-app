import { getSchoolPeriodsFetch, postSchoolPeriodsFetch } from "../../helpers/schoolPeriodHelper";
import { types } from "../types/types";

const startLoadPeriodSchool = (params = {}) => {
  return async (dispatchEvent) => {
    const schoolPeriod = await getSchoolPeriodsFetch(params);
    dispatchEvent(loadPeriodSchool(schoolPeriod));
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

const loadPeriodSchool = (schoolPeriod) => ({
  type: types.periodSchoolLoadAll,
  payload: schoolPeriod
})

export {startLoadPeriodSchool, startNewSchoolPeriod}
import { getSchoolPeriodsFetch } from "../../helpers/schoolPeriodHelper"
import { types } from "../types/types";

const startLoadPeriodSchool = (params = {}) => {
  return async (dispatchEvent) => {
    const schoolPeriod = await getSchoolPeriodsFetch(params);
    dispatchEvent(loadPeriodSchool(schoolPeriod));
  }
}

const loadPeriodSchool = (schoolPeriod) => ({
  type: types.periodSchoolLoadPeriodSchools,
  payload: schoolPeriod
})

export {startLoadPeriodSchool}
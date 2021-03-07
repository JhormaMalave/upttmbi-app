import { types } from "../types/types";

const initialState = {
  periods: [],
  active: null,
}

const schoolPeriodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.periodSchoolLoadPeriodSchools:
      return {
        ...state,
        periods: [...action.payload]
      }

    default:
      return state;
  }
}

export {schoolPeriodReducer}
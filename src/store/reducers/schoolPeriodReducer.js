import { types } from "../types/types";

const initialState = {
  periods: [],
  active: null,
}

const schoolPeriodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.periodSchoolLoadAll:
      return {
        ...state,
        periods: [...action.payload]
      }
    case types.periodSchoolActive:
      return {
        ...state,
        active: {...action.payload}
      }
    default:
      return state;
  }
}

export {schoolPeriodReducer}
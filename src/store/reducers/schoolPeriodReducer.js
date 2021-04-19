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
        active: {
          id: action.payload.id,
          name: String(action.payload.name),
          initial_date: action.payload.initial_date,
          final_date: action.payload.final_date || '',
          status: action.payload.status,
        }
      }
    case types.periodSchoolRemoveActive:
      return {
        ...state,
        active: null,
      }
    default:
      return state;
  }
}

export {schoolPeriodReducer}
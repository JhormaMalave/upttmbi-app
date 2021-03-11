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
          state: action.payload.state,
          start_date: action.payload.start_date,
          end_date: action.payload.end_date || '',
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
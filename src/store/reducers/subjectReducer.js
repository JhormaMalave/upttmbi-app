import { types } from "../types/types";

const initialState = {
  subjects: [],
  active: null,
}

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.subjectLoadAll:
      return {
        ...state,
        subjects: [...action.payload]
      }
    case types.subjectActive:
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
    case types.subjectRemoveActive:
      return {
        ...state,
        active: null,
      }
    default:
      return state;
  }
}

export {subjectReducer}
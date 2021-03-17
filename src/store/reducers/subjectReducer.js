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
          value: String(action.payload.value),
          curricular_unit_type_id: action.payload.curricular_unit_type_id,
          duration: action.payload.duration,
          state: action.payload.state,
          course_id: action.payload.course_id
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
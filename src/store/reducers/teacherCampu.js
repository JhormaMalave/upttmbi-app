import { types } from "../types/types";

const initialState = {
  teacherCampus: [],
  active: null,
}

const teacherCampuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.teacherCampuLoadAll:
      return {
        ...state,
        teacherCampus: [...action.payload]
      }
    case types.teacherCampuActive:
      return {
        ...state,
        active: {
          id: action.payload.id,
          name: String(action.payload.name),
          value: String(action.payload.value),
          curricular_unit_type_id: action.payload.curricular_unit_type_id,
          duration: action.payload.duration,
          status: action.payload.status,
          course_id: action.payload.course_id
        }
      }
    case types.teacherCampuRemoveActive:
      return {
        ...state,
        active: null,
      }
    default:
      return state;
  }
}

export {teacherCampuReducer}
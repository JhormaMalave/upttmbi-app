import { types } from "../types/types";

const initialState = {
  sections: [],
  active: null,
}

const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sectionLoadAll:
      return {
        ...state,
        sections: [...action.payload]
      }
    case types.sectionActive:
      return {
        ...state,
        active: {
          id: action.payload.id,
          name: action.payload.name,
          trimester: action.payload.trimester,
          shift: {
            id: action.payload.shift_id,
            nombre: action.payload.shift.nombre,
          },
          course: {
            id: action.payload.course.id,
            name: action.payload.course.name,
          },
          school_period: {
            id: action.payload.school_period.id,
            name: action.payload.school_period.name
          }
        }
      }
    case types.sectionRemoveActive:
      return {
        ...state,
        active: null,
      }
    default:
      return state;
  }
}

export {sectionReducer}
import { types } from "../types/types";

const subjectReducer = (state = [], action) => {
  switch (action.type) {
    case types.getSubjects:
      return action.payload;

    default:
      return state;
  }
}

export {subjectReducer}
import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token, 
      }
    case types.logout:
      return({});
    default:
      return state;
  }
}

export {authReducer}
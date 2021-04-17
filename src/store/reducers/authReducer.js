import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        token: action.payload.token, 
        email: action.payload.email,
        role: action.payload.role,
      }

    case types.logout:
      return({});
    default:
      return state;
  }
}

export {authReducer}
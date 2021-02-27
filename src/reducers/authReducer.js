import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        email: action.payload.email,
        token: action.payload.token, 
        expiredIn: action.payload.expiresIn,
      }

    case types.logout:
      return({});
    default:
      return state;
  }
}

export {authReducer}
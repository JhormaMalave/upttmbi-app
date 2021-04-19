import { types } from "../types/types";

const initState = {
  loading: false,
  alert: null,
}

const uiReducer = (state = initState, action) => { 
  switch (action.type) {
    case types.uiSetAlert:
      return ({
        ...state,
        alert: {
          type: action.payload.type,
          message: action.payload.message,
          url: action.payload.url
        }
      });

    case types.uiRemoveAlert:
      return ({
        ...state,
        alert: null,
      });

    case types.uiStartLoading:
      return ({
        ...state,
        loading: true,
      });
    case types.uiFinishLoading:
      return ({
        ...state,
        loading: false,
      })
  
    default:
      return state;
  }
}

export {uiReducer}
import { types } from "../types/types";

const setAlert = (type, message) => ({
  type: types.uiSetAlert,
  payload: {
    type,
    message
  }
});

const removeAlert = () => ({
  type: types.uiRemoveAlert,
});

const startLoading = () => ({
  type: types.uiStartLoading,
});

const finishLoading = () => ({
  type: types.uiFinishLoading,
});

export {setAlert, removeAlert, startLoading, finishLoading}
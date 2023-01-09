import * as actions from "./constant";

export const addMethod = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.ADD_METHOD_INITIATED });
    if (payload)
      await dispatch({
        type: actions.ADD_METHOD_SUCCESS,
        payload: payload,
      });
    else
      dispatch({
        type: actions.ADD_METHOD_ERROR,
        error: "Somthging Wrong",
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.ADD_METHOD_ERROR,
      error: "Network Error",
    });
  }
};
export const getMethods = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_METHODS_INITIATED });
    if (true)
      await dispatch({
        type: actions.GET_METHODS_SUCCESS,
        payload: payload,
      });
    else
      dispatch({
        type: actions.GET_METHODS_ERROR,
        error: "Somthging Wrong",
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.GET_METHODS_ERROR,
      error: "Network Error",
    });
  }
};
export const deletMethods = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_METHODS_INITIATED });
    if (payload)
      await dispatch({
        type: actions.DELETE_METHODS_SUCCESS,
        payload: payload,
      });
    else
      dispatch({
        type: actions.DELETE_METHODS_ERROR,
        error: "Somthging Wrong",
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_METHODS_ERROR,
      error: "Network Error",
    });
  }
};
export const updateMethods = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.UPDATE_METHODS_INITIATED });
    if (payload.id !== 0)
      await dispatch({
        type: actions.UPDATE_METHODS_SUCCESS,
        payload: payload,
      });
    else
      dispatch({
        type: actions.UPDATE_METHODS_ERROR,
        error: "Somthging Wrong",
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.UPDATE_METHODS_ERROR,
      error: "Network Error",
    });
  }
};

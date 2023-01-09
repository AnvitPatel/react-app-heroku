import * as actions from "./constant";

export const addPayment = (payload) => async (dispatch) => {
    try {
      dispatch({ type: actions.ADD_PAYMENT_INITIATED });
      if (payload)
        await dispatch({
          type: actions.ADD_PAYMENT_SUCCESS,
          payload: payload,
        });
      else
        dispatch({
          type: actions.ADD_PAYMENT_ERROR,
          error: "Somthging Wrong",
        });
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.ADD_PAYMENT_ERROR,
        error: "Network Error",
      });
    }
};

export const getPayments = (payload) => async (dispatch) => {
    try {
      dispatch({ type: actions.GET_PAYMENTS_INITIATED });
      if (true)
        await dispatch({
          type: actions.GET_PAYMENTS_SUCCESS,
          payload: payload,
        });
      else
        dispatch({
          type: actions.GET_PAYMENTS_ERROR,
          error: "Somthging Wrong",
        });
    } catch (error) {
      console.log(error, "action catch");
      dispatch({
        type: actions.GET_PAYMENTS_ERROR,
        error: "Network Error",
      });
    }
};

export const deletePayment = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_PAYMENTS_INITIATED });
    if (payload)
      await dispatch({
        type: actions.DELETE_PAYMENTS_SUCCESS,
        payload: payload,
      });
    else
      dispatch({
        type: actions.DELETE_PAYMENTS_ERROR,
        error: "Somthging Wrong",
      });
  } catch (error) {
    console.log(error, "action catch");
    dispatch({
      type: actions.DELETE_PAYMENTS_ERROR,
      error: "Network Error",
    });
  }
};
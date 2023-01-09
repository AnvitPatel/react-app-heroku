import * as actions from "./constant";

export const menuCol = (payload) => (dispatch) => {
    try {
      dispatch({ type: actions.MENUCOL, payload });
    } catch (error) {
      console.log("loader:", error);
    }
  };
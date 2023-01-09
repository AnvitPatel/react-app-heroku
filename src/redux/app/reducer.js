import * as actions from "./constant";
const initialState = {
  loading: false,
  error: false,
  calldisplay: false,
  connection: null,
  collapsed:false,
  message: "",
  selected: "contact",
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case actions.MENUCOL:
      return {
        ...state,
        collapsed: action.payload,
      };
 default:
      return state;
  }
};

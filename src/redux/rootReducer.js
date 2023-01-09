import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import app from "./app/reducer";
import methods from "./methods/reducer";
import payment from "./payments/reducer";
const rootReducer = (history) =>
combineReducers({
    app,
    methods,
    payment,
    router: connectRouter(history),
  });

  export default rootReducer;
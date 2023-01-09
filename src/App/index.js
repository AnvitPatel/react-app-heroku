import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import 'antd/dist/antd.css'

import DashApp from "./App";
import store from "redux/store";
import { history } from "../history";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <DashApp />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

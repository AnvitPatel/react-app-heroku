import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Payments from "container/Payments";
import Methods from "container/Methods";
import Demo2 from "container/Demo2";

const routes = [
  {
    path: "/",
    exact: true,
    AuthRoute: true,
    component: Payments,
  },
  {
    path: "/payments",
    exact: true,
    AuthRoute: true,
    component: Payments,
  },
  {
    path: "/methods",
    exact: true,
    AuthRoute: true,
    component: Methods,
  },
];
const PrivateRoute = ({ component: Component, ...rest }) => {
    // if (getAuthUserID()) 
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    // } else {
    //   return <Redirect to="/" />; 
    // }
  };
  const RestrictedRoute = ({ component: Component, publicAccess, ...rest }) => {
    // if (getAuthUserID()) {
      return (
        <Route
          {...rest}
          render={(props) =>
            publicAccess ? <Component {...props} /> : <Redirect to={"/"} />
          }
        />
      );
    // } else {
    //   return <Route {...rest} render={(props) => <Component {...props} />} />;
    // }
  };
class Routes extends Component {
  render() {
    return (
        <Suspense fallback={<Demo2 />}>
        <Switch>
          {routes.map((route, index) => {
            return !route.AuthRoute ? (
              <RestrictedRoute {...route} key={index} />
            ) : (
              <PrivateRoute {...route} key={index} />
            );
          })}
          <Route render={(props) =><>{"Error"}</>} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;

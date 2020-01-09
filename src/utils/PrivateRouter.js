import React from "react";
import { Route, Redirect} from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('jwt')?(
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/" }}
          />
        )
      }
    />
  );
};

export default (PrivateRouter);

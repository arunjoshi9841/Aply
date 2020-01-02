import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Route, Redirect} from "react-router-dom";

const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated?(
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

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps=({auth})=>{
    return{
    isAuthenticated: auth.isAuthenticated
    }
    }

export default connect(mapStateToProps, null)(PrivateRouter);

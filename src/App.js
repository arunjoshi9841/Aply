import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//import NotificatioModal from "./components/reusable-components/NotificationModal";
//import containers
import Home from "./containers/Home/Home";
import Dashboard from "./containers/Dashboard/Dashboard";
import NavBar from "./components/reusable-components/NavBar";
import PrivateRoute from "./utils/PrivateRouter";
import PageNotFound from "./components/screens/PageNotFound";
import Profile from "./containers/Profile/Profile";
import Contact from "./components/screens/Contact";
import About from "./components/screens/About";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthentication } from "./store/actions";

function App({ isAuthenticated, setAuthentication }) {
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setAuthentication();
    }
  });
  return (
    <div className="font-baseFont">
      <NavBar />
      {/* <NotificatioModal />           */}
      <div className="lg:mx-16 mx-8 my-8">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <PrivateRoute exact path="/:user/Dashboard" component={Dashboard} />
          <PrivateRoute exact path="/:user" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setAuthentication: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthentication
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

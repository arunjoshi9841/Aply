import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NotificatioModal from "./components/reusable-components/NotificationModal";
import Home from "./containers/Home/Home";
import Dashboard from "./containers/Dashboard/Dashboard";
//import Statistics from "./containers/Statistics/Statistics";
import NavBar from "./components/reusable-components/NavBar";
import PrivateRoute from "./utils/PrivateRouter";
import PageNotFound from "./components/screens/PageNotFound";
import Profile from "./containers/Profile/Profile";
//import Contact from "./components/screens/Contact";
//import About from "./components/screens/About";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthentication, getUser } from "./store/actions";

function App({ isAuthenticated, setAuthentication, getUser, notification }) {
  useEffect(() => {
    if (localStorage.getItem("paperclip_token")) {     
      getUser();
      setAuthentication();
    }
  },[]);
  return (
    <div className="font-baseFont overflow-hidden">
      <NavBar />
  {notification&&<NotificatioModal />}          
      <div className=" mx-8 my-8 lg:mx-16">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} /> */}
          <PrivateRoute exact path="/:user/Dashboard" component={Dashboard} />
          {/* <PrivateRoute exact path="/:user/Statistics" component={Statistics} /> */}
          <PrivateRoute exact path="/:user" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setAuthentication: PropTypes.func.isRequired,
  getUser:PropTypes.func.isRequired
};

const mapStateToProps = ({ auth, home }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    notification: home.notification
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthentication,
      getUser
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

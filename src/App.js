import React from "react";
import { Route, Switch } from "react-router-dom";
//import NotificatioModal from "./components/reusable-components/NotificationModal";
//import containers
import Home from "./containers/Home/Home";
import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./utils/PrivateRouter";
import PageNotFound from "./components/screens/PageNotFound";

function App() {
  
  return (
    <div className="font-baseFont">
      {/* <NotificatioModal />           */}
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/:user/Dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default (App);

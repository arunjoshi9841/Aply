import React from 'react';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';
import { Router, Route, Switch } from "react-router-dom";

//import containers
import Home from './containers/Home/Home'

function App() {
  return (
    <div className="font-baseFont">
       <Provider store={store}>         
          <Router history={history}>
          <Switch><Route exact path="/" component={Home}/></Switch>          
          </Router>
        </Provider>
    </div>
  );
}

export default App;

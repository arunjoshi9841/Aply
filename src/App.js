import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
function App() {
  return (
    <div className='App'>
       <Provider store={store}>
          <Router history={history}>
            <div>Hello</div>
          </Router>
        </Provider>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Layout from 'user/Layout/layout';
import Home from 'user/Components/Home/home';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {axiosAuthMiddleware} from 'common/middleware';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk, logger, axiosAuthMiddleware)(
	createStore
);

const store = createStoreWithMiddleware(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

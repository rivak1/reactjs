import React, { Component } from 'react';
import Layout from './layout/layout';
import Home from './components/home/home';
import About from './components/about/about';
import Dashboard from './components/dashboard/dashboard';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {axiosAuthMiddleware} from './middleware';
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

  constructor(props) {
    super(props)
  }
   render() {
    console.log(reducers);
    return (
      <Provider store={store}>
        <Router>
          <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

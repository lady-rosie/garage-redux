import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import CarsIndex from './containers/cars_index';
import carsReducer from './reducers/cars_reducers';
import CarNew from './containers/car_new';
import CarShow from './containers/car_show';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = [], action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={CarsIndex} />
        <Route path="/car/new" component={CarNew} />
        <Route path="/cars/:id" component={CarShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

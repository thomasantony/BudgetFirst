import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CategoryManager from './containers/CategoryManager';
import AccountManager from './containers/AccountManager'; // Shows transactions
import BudgetManager from './containers/BudgetManager';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/budget" component={BudgetManager} />
    <Route path="/account/:accountid" component={AccountManager} />
  </Route>
);
